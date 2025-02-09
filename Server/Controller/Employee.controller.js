import Employee from "../model/Employee.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ConnectCloudinary from "../Config/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
// Create Employee
export const createEmployee = async (req, res, io) => {
  const {
    name,
    email,
    password,
    location,
    empType,
    role,
    salary,
    extraDetails,
  } = req.body;
  // try {
  // Check if the email already exists
  const existingEmployee = await Employee.findOne({ email });
  if (existingEmployee) {
    return res.status(400).json({
      status: 400,
      message: "Email already exists",
      success: false,
    });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword", hashedPassword);
  // await ConnectCloudinary();
  // const imageUrlLocalPath = req.files?.imageUrl[0]?.path;
  // console.log("imageUrlLocalPath", imageUrlLocalPath);

  // // Upload images to Cloudinary
  // let result = await cloudinary.uploader.upload(imageUrlLocalPath, {
  //   resource_type: "image",
  // });

  const newEmployee = new Employee({
    name,
    email,
    password: hashedPassword,
    location,
    empType,
    role,
    salary,
    extraDetails,
    // image: result?.secure_url,
    // cloudinary_public_id: result?.public_id,
  });

  const savedEmployee = await newEmployee.save();

  // Emit event to all connected clients
  io.emit("new_employee", {
    id: savedEmployee._id,
    name: savedEmployee.name,
    email: savedEmployee.email,
    location: savedEmployee.location,
    empType: savedEmployee.empType,
    role: savedEmployee.role,
    salary: savedEmployee.salary,
    image: savedEmployee.secure_url,
    cloudinary_public_id: savedEmployee.public_id,
  });

  return res.status(201).json({
    status: 201,
    message: "Employee created successfully",
    data: savedEmployee,
    success: true,
  });
  // } catch (error) {
  //   return res.status(500).json({
  //     status: 500,
  //     message: "Server error",
  //     error: error.message,
  //     success: false,
  //   });
  // }
};

// Get All Employees
export const getAllEmployees = async (req, res, io) => {
  try {
    const employees = await Employee.find();

    // Emit event to notify clients about the retrieved employees
    io.emit("all_employees_retrieved", {
      message: "All employees have been retrieved",
      count: employees.length, // Number of employees retrieved
      data: employees, // Only send if necessary, depending on use case
    });

    return res.status(200).json({
      status: 200,
      message: "All employees retrieved successfully",
      data: employees,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
      success: false,
    });
  }
};

// Get Employee by ID
export const getEmployeeById = async (req, res, io) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({
        status: 404,
        message: "Employee not found",
        success: false,
      });
    }

    // Emit an event with the retrieved employee data
    io.emit("employee_retrieved", {
      message: "An employee has been retrieved",
      data: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        location: employee.location,
        empType: employee.empType,
        role: employee.role,
        salary: employee.salary,
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Employee retrieved successfully",
      data: employee,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
      success: false,
    });
  }
};

// Update Employee
export const updateEmployee = async (req, res, io) => {
  const { id } = req.params;
  const { name, email, location, empType, role, salary, extraDetails } =
    req.body;

  try {
    const Employee = await Employee.findById(id);
    let imageUrl = Employee.imageUrl; // Keep the current image URL by default

    // If a new image file is uploaded, handle Cloudinary update
    if (req.files && req.files.imageUrl) {
      // Delete the old image from Cloudinary using its public_id
      await cloudinary.uploader.destroy(Employee.cloudinary_public_id);

      // Upload the new image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(
        req.files.imageUrl[0].path,
        {
          resource_type: "image",
        }
      );

      // Update the image URL and public_id
      imageUrl = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      {
        name,
        email,
        location,
        empType,
        role,
        salary,
        extraDetails,
        image: imageUrl.url,
        cloudinary_public_id: imageUrl.public_id,
      },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        status: 404,
        message: "Employee not found",
        success: false,
      });
    }

    // Emit an event with the updated employee data
    io.emit("employee_updated", {
      message: "An employee has been updated",
      data: {
        id: updatedEmployee._id,
        name: updatedEmployee.name,
        email: updatedEmployee.email,
        location: updatedEmployee.location,
        empType: updatedEmployee.empType,
        role: updatedEmployee.role,
        salary: updatedEmployee.salary,
        extraDetails: updatedEmployee.extraDetails,
        image: updatedEmployee.url,
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Employee updated successfully",
      data: updatedEmployee,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
      success: false,
    });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    // Extract public_id from the stored Cloudinary image URL
    const publicId = employee.cloudinary_public_id; // find the cloudinary public_id in database
    console.log("public", publicId);
    // Delete the image from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({
        status: 404,
        message: "Employee not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Employee deleted successfully",
      data: deletedEmployee,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
      success: false,
    });
  }
};

// Employee Login
export const employeeLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the employee exists
    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(404).json({
        status: 404,
        message: "Employee not found",
        success: false,
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 401,
        message: "Invalid email or password",
        success: false,
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: employee._id, role: employee.role },
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      status: 200,
      message: "Login successful",
      token,
      data: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
      },
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server error",
      error: error.message,
      success: false,
    });
  }
};
