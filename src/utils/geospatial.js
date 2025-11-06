/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lng1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lng2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
};

/**
 * Convert degrees to radians
 */
const toRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Sort entities by proximity, discount, and rating
 * @param {Array} entities - Array of entities
 * @param {number} userLat - User's latitude
 * @param {number} userLng - User's longitude
 * @returns {Array} Sorted entities with distance field
 */
export const sortByProximity = (entities, userLat, userLng) => {
  return entities.map(entity => {
    const distance = calculateDistance(
      userLat,
      userLng,
      entity.location.lat,
      entity.location.lng
    );
    
    return {
      ...entity.toObject(),
      distance: parseFloat(distance.toFixed(2))
    };
  }).sort((a, b) => {
    // Primary sort: distance (nearest first)
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    
    // Secondary sort: discount (higher first)
    const discountA = a.discount?.percent || 0;
    const discountB = b.discount?.percent || 0;
    if (discountA !== discountB) {
      return discountB - discountA;
    }
    
    // Tertiary sort: rating (higher first)
    return b.rating - a.rating;
  });
};

/**
 * Get search suggestions based on partial query
 * @param {string} query - Partial search query
 * @param {Array} entities - Array of entities
 * @returns {Array} Array of suggestions
 */
export const getSearchSuggestions = (query, entities) => {
  const suggestions = new Set();
  const lowerQuery = query.toLowerCase();
  
  entities.forEach(entity => {
    // Add name if it matches
    if (entity.name_ar.toLowerCase().includes(lowerQuery)) {
      suggestions.add(entity.name_ar);
    }
    
    // Add matching specialties
    entity.specialties?.forEach(specialty => {
      if (specialty.toLowerCase().includes(lowerQuery)) {
        suggestions.add(specialty);
      }
    });
    
    // Add matching services
    entity.services?.forEach(service => {
      if (service.toLowerCase().includes(lowerQuery)) {
        suggestions.add(service);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 10);
};
