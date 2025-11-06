import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'لا يوجد رمز مصادقة، الوصول مرفوض'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'Bearer ');
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: 'رمز غير صالح'
    });
  }
};
