import express from 'express';
import Entity from '../models/Entity.js';
import { authMiddleware } from '../middleware/auth.js';
import { entitySchema } from '../middleware/validation.js';

const router = express.Router();

// Apply auth middleware to all admin routes
router.use(authMiddleware);

/**
 * @route   GET /api/admin/entities
 * @desc    Get all entities with pagination
 * @access  Private (Admin)
 */
router.get('/entities', async (req, res) => {
  try {
    const { page = 1, limit = 20, type } = req.query;
    
    const query = type && type !== 'all' ? { type } : {};
    
    const entities = await Entity.find(query)
      .sort({ created_at: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Entity.countDocuments(query);

    res.json({
      success: true,
      data: entities,
      pagination: {
        total: count,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    console.error('Get entities error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في جلب الكيانات'
    });
  }
});

/**
 * @route   GET /api/admin/entities/:id
 * @desc    Get single entity by ID
 * @access  Private (Admin)
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
      error: 'خطأ في جلب الكيان'
    });
  }
});

/**
 * @route   POST /api/admin/entities
 * @desc    Create new entity
 * @access  Private (Admin)
 */
router.post('/entities', async (req, res) => {
  try {
    // Validate input
    const validation = entitySchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'بيانات غير صالحة',
        details: validation.error.errors
      });
    }

    const entity = new Entity(req.body);
    await entity.save();

    res.status(201).json({
      success: true,
      data: entity
    });
  } catch (error) {
    console.error('Create entity error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في إنشاء الكيان'
    });
  }
});

/**
 * @route   PUT /api/admin/entities/:id
 * @desc    Update entity
 * @access  Private (Admin)
 */
router.put('/entities/:id', async (req, res) => {
  try {
    // Validate input
    const validation = entitySchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'بيانات غير صالحة',
        details: validation.error.errors
      });
    }

    const entity = await Entity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

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
    console.error('Update entity error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في تحديث الكيان'
    });
  }
});

/**
 * @route   DELETE /api/admin/entities/:id
 * @desc    Delete entity
 * @access  Private (Admin)
 */
router.delete('/entities/:id', async (req, res) => {
  try {
    const entity = await Entity.findByIdAndDelete(req.params.id);

    if (!entity) {
      return res.status(404).json({
        success: false,
        error: 'الكيان غير موجود'
      });
    }

    res.json({
      success: true,
      message: 'تم حذف الكيان بنجاح'
    });
  } catch (error) {
    console.error('Delete entity error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في حذف الكيان'
    });
  }
});

/**
 * @route   GET /api/admin/stats
 * @desc    Get dashboard statistics
 * @access  Private (Admin)
 */
router.get('/stats', async (req, res) => {
  try {
    const stats = await Entity.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
          avgRating: { $avg: '$rating' }
        }
      }
    ]);

    const totalCount = await Entity.countDocuments();

    res.json({
      success: true,
      data: {
        total: totalCount,
        byType: stats,
        lastUpdated: new Date()
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في جلب الإحصائيات'
    });
  }
});

export default router;
