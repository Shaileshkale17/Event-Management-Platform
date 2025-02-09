import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  searchEventsByTag,
} from "../Controller/Events.controller.js";
import { upload } from "../Middlewares/multerMiddlewares.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/events",
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  (req, res) => createEvent(req, res, req.app.locals.io)
);

router.get("/events", (req, res) => getAllEvents(req, res, req.app.locals.io));

router.get(
  "/events/:id",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => getEventById(req, res, req.app.locals.io)
);

router.put(
  "/events/:id",
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  authenticateToken(["employee", "admin", "subadmin"]),
  (req, res) => updateEvent(req, res, req.app.locals.io)
);

router.delete(
  "/events/:id",
  authenticateToken(["employee", "admin", "subadmin"]),
  (req, res) => deleteEvent(req, res, req.app.locals.io)
);

router.get("/events/search", (req, res) =>
  searchEventsByTag(req, res, req.app.locals.io)
);

export default router;
