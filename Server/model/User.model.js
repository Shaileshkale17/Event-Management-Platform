import mongoose, { Schema } from "mongoose";
const EventBookingSchema = new mongoose.Schema(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  { timestamps: true }
);
const UserSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
    },
    EventsBook: [EventBookingSchema],
    Messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    Executive: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
    role: {
      type: String,
      default: "User",
      enum: ["User"],
    },
    image: {
      type: String,
      default: "",
    },
    cloudinary_public_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
