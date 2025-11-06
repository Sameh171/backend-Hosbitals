import express from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { loginSchema } from '../middleware/validation.js';

const router = express.Router();

/**
 * @route   POST /api/auth/login
 * @desc    Admin login
 * @access  Public
 */
router.post('/login', async (req, res) => {
  try {
    // Validate input
    const validation = loginSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'بيانات غير صالحة',
        details: validation.error.errors
      });
    }

    const { username, password } = req.body;
console.log({ username, password });

    // Find admin
    const admin = await Admin.findOne({ username });
    console.log(admin);
    
    if (!admin) {
      return res.status(401).json({
        success: false,
        error: 'اسم المستخدم أو كلمة المرور غير صحيحة'
      });
    }

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'اسم المستخدم أو كلمة المرور غير صحيحة'
      });
    }
    console.log(isMatch);
    
    // Generate token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET || 'Bearer ',
      { expiresIn: '7d' }
    );
    console.log(token);
    
    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'خطأ في الخادم'
    });
  }
});

/**
 * @route   POST /api/auth/verify
 * @desc    Verify JWT token
 * @access  Public
 */
router.post('/verify', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'لا يوجد رمز مصادقة'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'Bearer ');
    
    res.json({
      success: true,
      admin: {
        id: decoded.id,
        username: decoded.username
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: 'رمز غير صالح'
    });
  }
});

export default router;
