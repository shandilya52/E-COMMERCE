import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

// Protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
        success: false,
      });
    }
    
    // Remove "Bearer " prefix if present
    const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    
    const decoded = JWT.verify(cleanToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Error:", error);
    return res.status(401).json({
      message: "Invalid token",
      success: false,
    });
  }
};

// Check whether admin
export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user || user.role !== 1) {
      return res.status(401).json({
        message: "Unauthorized access",
        success: false,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
