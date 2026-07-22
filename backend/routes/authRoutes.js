import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import rateLimit from "express-rate-limit";

import {
  signup,
  login,
  loginWith2FA,
  setup2FA,
  verify2FA,
  disable2FA,
  getUser,
  updateProfile,
  uploadProfileImage,
  logout,
  googleLogin,
} from "../controllers/authController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
  googleLogin, 
  resetPassword,
  forgotPasswordRequest,
  uploadProfileImage,
  uploadMiddleware
} from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rate limiter for 2FA endpoints
const twoFALimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts, please try again later" },
});

// Rate limiter for forgot password requests
const forgotPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Max 3 requests per 15 minutes per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many password reset requests from this IP, please try again after 15 minutes.' },
});

// Rate limiter for password reset attempts (using a token)
const resetPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max 5 attempts per 15 minutes per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many password reset attempts from this IP, please try again after 15 minutes.' },
});
// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/google-login', googleLogin);

// Two-Factor Authentication Routes
router.post("/setup-2fa", authMiddleware, twoFALimiter, setup2FA);

// Protected routes (require valid JWT)
router.get('/me', authMiddleware, getUser);
router.put('/update-profile', authMiddleware, updateProfile);
router.post("/upload-profile-picture", authMiddleware, uploadMiddleware, uploadProfileImage);
router.post('/logout', authMiddleware, logout);

router.post("/disable-2fa", authMiddleware, twoFALimiter, disable2FA);

// Forgot Password Routes
router.post('/forgot-password', forgotPasswordLimiter, forgotPasswordRequest); // Request reset link
router.post('/reset-password', resetPasswordLimiter, resetPassword); // Use reset link to set new password

export { router as authRouter };
