import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  recommendedUser,
  getMyFriends,
  sendFriendRequest,
  acceptedFriendRequest,
  getFriendRequest,
  getOutgoingFriendReqs,
} from "../controllers/user.controller.js";

const router = express.Router();

// Apply on All Route
router.use(protectRoute);

router.get("/", recommendedUser);
router.get("/friends", getMyFriends);

router.post("friend-request/:id", sendFriendRequest);
router.put("friend-request/:id/accepted", acceptedFriendRequest);

router.get("friend-requests", getFriendRequest);
router.get("outgoing-friend-requests", getOutgoingFriendReqs);

export default router;
