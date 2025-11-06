import mongoose from 'mongoose';

const entitySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['doctor', 'hospital', 'pharmacy', 'lab', 'clinic'],
    required: true,
    index: true
  },
  name_ar: {
    type: String,
    required: true,
    index: 'text'
  },
  specialties: [{
    type: String,
    index: true
  }],
  services: [{
    type: String,
    index: 'text'
  }],
  discount: {
    percent: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    valid_to: Date
  },
  insurances: [{
    type: String,
    index: true
  }],
  address: {
    city: {
      type: String,
      required: true,
      index: true
    },
    district: {
      type: String,
      required: true,
      index: true
    },
    full: {
      type: String,
      required: true
    }
  },
  location: {
    lat: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    lng: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    }
  },
  phones: [{
    type: String,
    required: true
  }],
  hours: [{
    day: String,
    open: String,
    close: String
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews_count: {
    type: Number,
    default: 0
  },
  images: [String],
  tags: [String],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Indexes for optimized search
entitySchema.index({ name_ar: 'text', services: 'text' });
entitySchema.index({ 'location.lat': 1, 'location.lng': 1 });
entitySchema.index({ type: 1, 'address.city': 1 });

// Update timestamp on save
entitySchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

const Entity = mongoose.model('Entity', entitySchema);

export default Entity;
