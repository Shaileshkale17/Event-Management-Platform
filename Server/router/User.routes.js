import express from "express";
import {
  getUserById,
  createUser,
  getAllUsers,
  loginUser,
  updateUser,
  updateUserPassword,
  deleteUser,
  addEventToUser,
  addMessageToUser,
} from "../Controller/User.Controller.js";
import { upload } from "../Middlewares/multerMiddlewares.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.post(
  "/users",
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  (req, res) => createUser(req, res, req.app.locals.io)
);
router.post("/users/login", (req, res) =>
  loginUser(req, res, req.app.locals.io)
);
router.get(
  "/users",
  authenticateToken(["User", "admin", "subadmin"]),
  (req, res) => getAllUsers(req, res, req.app.locals.io)
);
router.get(
  "/users/:id",
  authenticateToken(["User", "admin", "subadmin"]),
  (req, res) => getUserById(req, res, req.app.locals.io)
);
router.put(
  "/users/:id",
  authenticateToken(["User", "admin", "subadmin"]),
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  (req, res) => updateUser(req, res, req.app.locals.io)
);
router.put("/users/password/:id", authenticateToken(["User"]), (req, res) =>
  updateUserPassword(req, res, req.app.locals.io)
);
router.delete(
  "/users/:id",
  authenticateToken(["User", "admin", "subadmin"]),
  (req, res) => deleteUser(req, res, req.app.locals.io)
);

// Add event to user's EventsBook
router.post(
  "/users/addEvent",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => addEventToUser(req, res, req.app.locals.io)
);

// Add message to user's Messages
router.post(
  "/users/addMessage",
  authenticateToken(["User", "employee", "admin", "subadmin"]),
  (req, res) => addMessageToUser(req, res, req.app.locals.io)
);

// router.get(
//   "/users/events",
//   authenticateToken(["employee", "admin", "subadmin"]),
//   (req, res) => getUsersWithBookedEvents(req, res, req.app.locals.io)
// );
// router.get(
//   "/users/messages",
//   authenticateToken(["employee", "admin", "subadmin"]),
//   (req, res) => getUsersWithMessagesSent(req, res, req.app.locals.io)
// );

// router.get(
//   "/users/events",
//   // authenticateToken(["User", "employee", "admin", "subadmin"]),
//   (req, res) => getUsersWithBookedEvents(req, res, req.app.locals.io)
// );
// router.get(
//   "/users/message",
//   // authenticateToken(["User", "employee", "admin", "subadmin"]),
//   (req, res) => getUsersWithMessagesSent(req, res, req.app.locals.io)
// );

export default router;
