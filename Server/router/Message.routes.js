import express from "express";
import {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} from "../Controller/Message.controller.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.post(
  "/messages",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => createMessage(req, res, req.app.locals.io)
);
router.get(
  "/messages",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => getAllMessages(req, res, req.app.locals.io)
);
router.get(
  "/messages/:id",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => getMessageById(req, res, req.app.locals.io)
);
router.put(
  "/messages/:id",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => updateMessage(req, res, req.app.locals.io)
);
router.delete(
  "/messages/:id",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => deleteMessage(req, res, req.app.locals.io)
);

export default router;
