import express from "express";
import {
  getUsersWithBookedEvents,
  getUsersWithMessagesSent,
} from "../Controller/UserInfo.controller.js";

const router = express.Router();

router.get(
  "/info/events",
  // authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => getUsersWithBookedEvents(req, res, req.app.locals.io)
);
router.get(
  "/info/message",
  // authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => getUsersWithMessagesSent(req, res, req.app.locals.io)
);

export default router;
