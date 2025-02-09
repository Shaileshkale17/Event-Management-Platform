import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
});

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  cloudinary_public_id: {
    type: String,
  },
  tags: {
    type: [String],
  },
  date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  packages: {
    type: [PackageSchema],
  },
});

const Event = mongoose.model("Event", EventSchema);
export default Event;
