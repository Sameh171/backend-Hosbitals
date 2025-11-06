import express from 'express';
import Entity from '../models/Entity.js';
import { sortByProximity, calculateDistance } from '../utils/geospatial.js';
import { searchQuerySchema } from '../middleware/validation.js';

const router = express.Router();

/**
 * @route   GET /api/search
 * @desc    Search entities with filters and geospatial support
 * @access  Public
 */
router.get('/search', async (req, res) => {
  try {
    // Validate query parameters
    const validation = searchQuerySchema.safeParse(req.query);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'معاملات بحث غير صالحة',
        details: validation.error.errors
      });
    }

    const {
      query = '',
      type = 'all',
      city,
      district,
      specialty,
      insurance,
      rating,
      discount,
      lat,
      lng,
      radius = '50', // Default 50km radius
      page = '1',
      limit = '20'
    } = req.query;

    // Build query
    const searchQuery = {};

    // Type filter
    if (type && type !== 'all') {
      searchQuery.type = type;
    }

    // Text search
    if (query) {
      searchQuery.$or = [
        { name_ar: { $regex: query, $options: 'i' } },
        { specialties: { $regex: query, $options: 'i' } },
        { services: { $regex: query, $options: 'i' } }
      ];
    }

    // Location filters
    if (city) {
      searchQuery['address.city'] = { $regex: city, $options: 'i' };
    }
    if (district) {
      searchQuery['address.district'] = { $regex: district, $options: 'i' };
    }

    // Specialty filter
    if (specialty) {
      searchQuery.specialties = { $regex: specialty, $options: 'i' };
    }

    // Insurance filter
    if (insurance) {
      searchQuery.insurances = { $regex: insurance, $options: 'i' };
    }

    // Rating filter (minimum rating)
    if (rating) {
      searchQuery.rating = { $gte: parseFloat(rating) };
    }

    // Discount filter (minimum discount percentage)
    if (discount) {
      searchQuery['discount.percent'] = { $gte: parseFloat(discount) };
    }

    // Execute query
    let entities = await Entity.find(searchQuery);

    // Apply geospatial filtering and sorting
    if (lat && lng) {
      const userLat = parseFloat(lat);
      const userLng = parseFloat(lng);
      const maxRadius = parseFloat(radius);

      // Filter by radius and add distance
      entities = entities.filter(entity => {
        const distance = calculateDistance(
          userLat,
          userLng,
          entity.location.lat,
          entity.location.lng
        );
        return distance <= maxRadius;
      });

      // Sort by proximity, discount, rating
      entities = sortByProximity(entities, userLat, userLng);
    } else {
      // Sort by discount and rating if no location provided
      entities = entities.map(e => e.toObject()).sort((a, b) => {
        const discountA = a.discount?.percent || 0;
        const discountB = b.discount?.percent || 0;
        if (discountA !== discountB) {
          return discountB - discountA;
        }
        return b.rating - a.rating;
      });
    }

    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedEntities = entities.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedEntities,
      pagination: {
        total: entities.length,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(entities.length / limitNum)
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في البحث'
    });
  }
});

/**
 * @route   GET /api/entities/:id
 * @desc    Get single entity by ID
 * @access  Public
 */
router.get('/entities/:id', async (req, res) => {
  try {
    const entity = await Entity.findById(req.params.id);

    if (!entity) {
      return res.status(404).json({
        success: false,
        error: 'الكيان غير موجود'
      });
    }

    res.json({
      success: true,
      data: entity
    });
  } catch (error) {
    console.error('Get entity error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في جلب البيانات'
    });
  }
});

/**
 * @route   GET /api/suggestions
 * @desc    Get search suggestions
 * @access  Public
 */
router.get('/suggestions', async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || query.length < 2) {
      return res.json({
        success: true,
        data: []
      });
    }

    // Get entities matching the query
    const entities = await Entity.find({
      $or: [
        { name_ar: { $regex: query, $options: 'i' } },
        { specialties: { $regex: query, $options: 'i' } },
        { services: { $regex: query, $options: 'i' } }
      ]
    }).limit(50);

    // Extract unique suggestions
    const suggestions = new Set();
    entities.forEach(entity => {
      const lowerQuery = query.toLowerCase();
      
      if (entity.name_ar.toLowerCase().includes(lowerQuery)) {
        suggestions.add(entity.name_ar);
      }
      
      entity.specialties?.forEach(specialty => {
        if (specialty.toLowerCase().includes(lowerQuery)) {
          suggestions.add(specialty);
        }
      });
      
      entity.services?.forEach(service => {
        if (service.toLowerCase().includes(lowerQuery)) {
          suggestions.add(service);
        }
      });
    });

    res.json({
      success: true,
      data: Array.from(suggestions).slice(0, 10)
    });
  } catch (error) {
    console.error('Suggestions error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في جلب الاقتراحات'
    });
  }
});

export default router;
