import Event from "../model/Event.Model.js";
import { v2 as cloudinary } from "cloudinary";
import ConnectCloudinary from "../Config/cloudinary.js";
export const createEvent = async (req, res, io) => {
  try {
    const { title, description, tags, date, price, packages } = req.body;

    // Log req.files to check if files are uploaded properly
    console.log("req.files:", req.files);

    // Ensure Cloudinary is connected
    await ConnectCloudinary();

    // Extract the image path from req.files
    const imageUrlLocalPath = req.files?.imageUrl?.[0]?.path;
    if (!imageUrlLocalPath) {
      return res.status(400).json({
        status: 400,
        message: "Image is required for creating an event",
        success: false,
      });
    }

    console.log("imageUrlLocalPath:", imageUrlLocalPath);

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(imageUrlLocalPath, {
      resource_type: "image",
    });
    console.log("res", result);
    // Create the event in the database
    const newEvent = await Event.create({
      title,
      description,
      imageUrl: result.secure_url,
      cloudinary_public_id: result.public_id,
      tags,
      date,
      price,
      packages: packages, // Parse packages if sent as a JSON string
    });
    console.log(newEvent);
    if (!newEvent) {
      return res.status(400).json({
        status: 400,
        message: "Event creation failed",
        success: false,
      });
    }

    // Emit the new event to connected clients
    io.emit("new_Event", {
      id: newEvent._id,
      title: newEvent.title,
      description: newEvent.description,
      imageUrl: newEvent.imageUrl,
      tags: newEvent.tags,
      date: newEvent.date,
      price: newEvent.price,
      packages: newEvent.packages,
    });

    // Return success response
    return res.status(201).json({
      status: 201,
      data: newEvent,
      message: "Event created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error",
      success: false,
    });
  }
};

// Get All Events
export const getAllEvents = async (req, res, io) => {
  try {
    const events = await Event.find();

    // if (!events.length) {
    //   return res.status(404).json({
    //     status: 404,
    //     message: "No events found",
    //     success: false,
    //   });
    // }
    io.emit("all_events_retrieved", {
      message: "All events have been retrieved",
      count: events.length,
      data: events,
    });
    return res.status(200).json({
      status: 200,
      data: events,
      message: "All events fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error",
      success: false,
    });
  }
};

export const getEventById = async (req, res, io) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        status: 404,
        message: "Event not found",
        success: false,
      });
    }
    io.emit("events_retrieved", {
      message: "An events has been retrieved",
      data: {
        id: event._id,
        title: event.title,
        description: event.description,
        imageUrl: event.imageUrl,
        tags: event.tags,
        date: event.date,
        price: event.price,
        packages: event.packages,
      },
    });
    return res.status(200).json({
      status: 200,
      data: event,
      message: "Event fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error",
      success: false,
    });
  }
};

// Update an Event
export const updateEvent = async (req, res, io) => {
  const { id } = req.params;
  const { title, description, image, imageUrl, tags, date, price, packages } =
    req.body;

  try {
    // Find the current event to get its image public_id
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "event not found.",
      });
    }

    let imageUrl = event.imageUrl; // Keep the current image URL by default

    // If a new image file is uploaded, handle Cloudinary update
    if (req.files && req.files.imageUrl) {
      // Delete the old image from Cloudinary using its public_id
      await cloudinary.uploader.destroy(event.cloudinary_public_id);

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
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        title,
        description,
        imageUrl: imageUrl.url,
        cloudinary_public_id: imageUrl.public_id,
        tags,
        date,
        price,
        packages,
      },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({
        status: 404,
        message: "Event not found",
        success: false,
      });
    }

    io.emit("event_updated", {
      message: "An event has been updated",
      data: {
        id: updatedEvent._id,
        title: updatedEvent.title,
        description: updatedEvent.description,
        imageUrl: updatedEvent.imageUrl,
        tags: updatedEvent.tags,
        date: updatedEvent.date,
        price: updatedEvent.price,
        packages: updatedEvent.packages,
      },
    });
    return res.status(200).json({
      status: 200,
      data: updatedEvent,
      message: "Event updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error",
      success: false,
    });
  }
};

export const deleteEvent = async (req, res, io) => {
  const { id } = req.params;

  try {
    await ConnectCloudinary();

    // Find the event first to get the image `public_id`
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "event not found.",
      });
    }

    // Extract public_id from the stored Cloudinary image URL
    const publicId = event.cloudinary_public_id; // find the cloudinary public_id in database
    console.log("public", publicId);
    // Delete the image from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({
        status: 404,
        message: "Event not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      data: deletedEvent,
      message: "Event deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error",
      success: false,
    });
  }
};

export const searchEventsByTag = async (req, res, io) => {
  const { tag } = req.query;

  try {
    const events = await Event.find({ tags: { $in: [tag] } });

    if (!events.length) {
      return res.status(404).json({
        status: 404,
        message: "No events found with the specified tag",
        success: false,
      });
    }
    io.emit("all_events_retrieved", {
      message: "All events have been retrieved",
      count: events.length,
      data: events,
    });
    return res.status(200).json({
      status: 200,
      data: events,
      message: "Events fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error",
      success: false,
    });
  }
};
