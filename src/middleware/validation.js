import { z } from 'zod';

// Entity validation schema
export const entitySchema = z.object({
  type: z.enum(['doctor', 'hospital', 'pharmacy', 'lab', 'clinic']),
  name_ar: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
  specialties: z.array(z.string()).optional().default([]),
  services: z.array(z.string()).optional().default([]),
  discount: z.object({
    percent: z.number().min(0).max(100).optional().default(0),
    valid_to: z.string().optional()
  }).optional(),
  insurances: z.array(z.string()).optional().default([]),
  address: z.object({
    city: z.string().min(2, 'المدينة مطلوبة'),
    district: z.string().min(2, 'الحي مطلوب'),
    full: z.string().min(5, 'العنوان الكامل مطلوب')
  }),
  location: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180)
  }),
  phones: z.array(z.string()).min(1, 'رقم هاتف واحد على الأقل مطلوب'),
  hours: z.array(z.object({
    day: z.string(),
    open: z.string(),
    close: z.string()
  })).optional().default([]),
  rating: z.number().min(0).max(5).optional().default(0),
  reviews_count: z.number().min(0).optional().default(0),
  images: z.array(z.string()).optional().default([]),
  tags: z.array(z.string()).optional().default([])
});

// Search query validation
export const searchQuerySchema = z.object({
  query: z.string().optional(),
  type: z.enum(['doctor', 'hospital', 'pharmacy', 'lab', 'clinic', 'all']).optional(),
  city: z.string().optional(),
  district: z.string().optional(),
  specialty: z.string().optional(),
  insurance: z.string().optional(),
  rating: z.string().optional(),
  discount: z.string().optional(),
  lat: z.string().optional(),
  lng: z.string().optional(),
  radius: z.string().optional(),
  page: z.string().optional(),
  limit: z.string().optional()
});

// Admin login validation
export const loginSchema = z.object({
  username: z.string().min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل')
});

// Validation middleware
export const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: 'بيانات غير صالحة',
        details: error.errors
      });
    }
  };
};
