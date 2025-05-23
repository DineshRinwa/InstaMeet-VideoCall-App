import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
} from "../controllers/user.controller.js";

const router = express.Router();

// Apply on All Route
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accepted", acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;