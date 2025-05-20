import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  Signup,
  Login,
  Logout,
  onboard,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

router.post("/onboarding", protectRoute, onboard);

// Check that user is login or not
router.get("/user", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
