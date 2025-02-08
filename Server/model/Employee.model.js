import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    cloudinary_public_id: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
    empType: {
      type: String,
      default: "Full-Time",
      enum: ["Full-Time", "Part-Time", "Contract", "Intern"],
    },

    role: {
      type: String,
      default: "employee",
      enum: ["employee", "admin", "subadmin"],
    },
    salary: {
      type: Number,
      required: true,
    },
    extraDetails: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;
