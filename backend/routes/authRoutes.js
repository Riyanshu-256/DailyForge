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

// Rate limiter for 2FA endpoints
const twoFALimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts, please try again later" },
});

// Public Authentication Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/google-login", googleLogin);
router.post("/login-2fa", twoFALimiter, loginWith2FA);

// Protected Routes
router.get("/user", authMiddleware, getUser);

router.put("/update-profile", authMiddleware, updateProfile);

router.post(
  "/upload-profile-image",
  authMiddleware,
  upload.single("image"),
  uploadProfileImage,
);

router.post("/logout", authMiddleware, logout);

// Two-Factor Authentication Routes
router.post("/setup-2fa", authMiddleware, twoFALimiter, setup2FA);

router.post("/verify-2fa", authMiddleware, twoFALimiter, verify2FA);

router.post("/disable-2fa", authMiddleware, twoFALimiter, disable2FA);

export { router as authRouter };
