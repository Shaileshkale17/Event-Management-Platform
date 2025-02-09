import express from "express";
import {
  getAllEmployees,
  createEmployee,
  employeeLogin,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../Controller/Employee.controller.js";
import { upload } from "../Middlewares/multerMiddlewares.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/employees",
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  (req, res) => createEmployee(req, res, req.app.locals.io)
);
router.post("/employees/login", (req, res) =>
  employeeLogin(req, res, req.app.locals.io)
);
router.get(
  "/employees",
  authenticateToken(["employee", "admin", "subadmin"]),
  (req, res) => getAllEmployees(req, res, req.app.locals.io)
);
router.get(
  "/employees/:id",
  authenticateToken(["employee", "admin", "subadmin"]),
  (req, res) => getEmployeeById(req, res, req.app.locals.io)
);
router.put(
  "/employees/:id",
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  authenticateToken(["employee", "admin", "subadmin"]),
  (req, res) => updateEmployee(req, res, req.app.locals.io)
);
router.delete(
  "/employees/:id",
  authenticateToken(["employee", "admin", "subadmin"]),
  (req, res) => deleteEmployee(req, res, req.app.locals.io)
);

export default router;
