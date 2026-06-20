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

const router = express.Router();

// ─────────────────────────────────────────────────────────────
// Rate limiter for 2FA endpoints
// Prevents brute-force attacks on TOTP verification codes
// Maximum: 5 requests per 15 minutes
// ─────────────────────────────────────────────────────────────
const twoFALimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts, please try again later" },
});

// ─────────────────────────────────────────────────────────────
// Public Authentication Routes
// ─────────────────────────────────────────────────────────────

// Register a new user
router.post("/signup", signup);

// Login with email/password
router.post("/login", login);

// Login/Register using Google OAuth
router.post("/google-login", googleLogin);

// Complete login when 2FA is enabled
router.post("/login-2fa", twoFALimiter, loginWith2FA);

// ─────────────────────────────────────────────────────────────
// Protected Routes (JWT Authentication Required)
// ─────────────────────────────────────────────────────────────

// Get authenticated user's profile data
router.get("/user", authMiddleware, getUser);

// Update authenticated user's profile information
// (can be extended to support profile image uploads)
router.put("/update-profile", authMiddleware, updateProfile);

router.post(
  "/upload-profile-image",
  authMiddleware,
  upload.single("image"),
  uploadProfileImage,
);

// Logout authenticated user
router.post("/logout", authMiddleware, logout);

// ─────────────────────────────────────────────────────────────
// Two-Factor Authentication Management
// ─────────────────────────────────────────────────────────────

// Generate QR code and secret for 2FA setup
router.post("/setup-2fa", authMiddleware, twoFALimiter, setup2FA);

// Verify and enable 2FA
router.post("/verify-2fa", authMiddleware, twoFALimiter, verify2FA);

// Disable 2FA for the authenticated user
router.post("/disable-2fa", authMiddleware, twoFALimiter, disable2FA);

export { router as authRouter };
