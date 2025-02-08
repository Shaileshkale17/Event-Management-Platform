import mongoose, { Schema } from "mongoose";

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
    EventsBook: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    Messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
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
