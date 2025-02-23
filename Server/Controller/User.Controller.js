import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ConnectCloudinary from "../Config/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
export const createUser = async (req, res, io) => {
  const { FullName, Email, Password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, 10);

    let data = await User.create({
      FullName,
      Email,
      Password: hashedPassword,
    });

    if (!data) {
      return res.status(500).json({
        status: 500,
        message: "Failed to save user data in the database",
        success: false,
      });
    }
    return res.status(201).json({
      status: 201,
      data,
      message: "User created successfully",
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

export const loginUser = async (req, res, io) => {
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 401,
        message: "Invalid email or password",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      status: 200,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        FullName: user.FullName,
        Email: user.Email,
        role: user.role,
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

// export const getAllUsers = async (req, res, io) => {
//   try {
//     const data = await User.aggregate([
//       {
//         $lookup: {
//           from: "events", // The name of the collection for Events
//           localField: "EventsBook.eventId",
//           foreignField: "_id",
//           as: "EventDetails",
//           pipeline:""
//         },
//       },
//       {
//         $lookup: {
//           from: "messages", // The name of the collection for Messages
//           localField: "Messages",
//           foreignField: "_id",
//           as: "MessageDetails",
//         },
//       },
//       {
//         $addFields: {
//           totalEvents: { $size: "$EventDetails" }, // Count total events
//           totalMessages: { $size: "$MessageDetails" }, // Count total messages
//         },
//       },
//       {
//         $project: {
//           Password: 0, // Exclude sensitive data like password
//         },
//       },
//     ]);
//     io.emit("all_Users_retrieved", {
//       message: "All Users have been retrieved",
//       count: data.length, // Number of datas retrieved
//       data: data, // Only send if necessary, depending on use case
//     });
//     return res.status(200).json({
//       status: 200,
//       data,
//       message: "All users fetched successfully",
//       success: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: 500,
//       error: error.message,
//       message: "Server error",
//       success: false,
//     });
//   }
// };
export const getAllUsers = async (req, res, io) => {
  try {
    const data = await User.aggregate([
      // Unwind EventsBook to access timestamps
      {
        $unwind: {
          path: "$EventsBook",
          preserveNullAndEmptyArrays: true, // Include users without events
        },
      },
      {
        $lookup: {
          from: "events", // The actual collection name
          localField: "EventsBook.eventId",
          foreignField: "_id",
          as: "EventDetails",
        },
      },
      {
        $unwind: {
          path: "$EventDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$_id",
          FullName: { $first: "$FullName" },
          Email: { $first: "$Email" },
          Phone: { $first: "$Phone" },
          role: { $first: "$role" },
          image: { $first: "$image" },
          cloudinary_public_id: { $first: "$cloudinary_public_id" },
          Messages: { $first: "$Messages" },
          userCreatedAt: { $first: "$createdAt" },
          userUpdatedAt: { $first: "$updatedAt" },
          // ✅ Store Event Details with timestamps
          EventDetails: {
            $push: {
              _id: "$EventDetails._id",
              title: "$EventDetails.title",
              description: "$EventDetails.description",
              eventAddedAt: "$EventsBook.createdAt",
              eventUpdatedAt: "$EventsBook.updatedAt",
            },
          },
        },
      },
      {
        $lookup: {
          from: "messages",
          localField: "Messages",
          foreignField: "_id",
          as: "MessageDetails",
        },
      },
      {
        $addFields: {
          totalEvents: { $size: "$EventDetails" }, // Count total events
          totalMessages: { $size: "$MessageDetails" }, // Count total messages
        },
      },
      {
        $project: {
          Password: 0, // Exclude sensitive data
        },
      },
    ]).sort({ userUpdatedAt: -1 });

    io.emit("all_Users_retrieved", {
      message: "All Users have been retrieved",
      count: data.length,
      data,
    });

    return res.status(200).json({
      status: 200,
      data,
      message: "All users fetched successfully",
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

// export const getUserById = async (req, res, io) => {
//   const { id } = req.params;

//   if (!id) {
//     return res.status(400).json({
//       status: 400,
//       message: "User ID is required",
//       success: false,
//     });
//   }

//   try {
//     const data = await User.aggregate([
//       {
//         $match: { _id: new mongoose.Types.ObjectId(id) }, // Match the user by ID
//       },
//       {
//         $lookup: {
//           from: "events", // The name of the "Event" collection
//           localField: "EventsBook.eventId",
//           foreignField: "_id",
//           as: "EventDetails",
//         },
//       },
//       {
//         $lookup: {
//           from: "messages", // The name of the "Message" collection
//           localField: "Messages",
//           foreignField: "_id",
//           as: "MessageDetails",
//         },
//       },
//       {
//         $addFields: {
//           totalEvents: { $size: "$EventDetails" }, // Add total events count
//           totalMessages: { $size: "$MessageDetails" }, // Add total messages count
//         },
//       },
//       {
//         $project: {
//           Password: 0, // Exclude the Password field
//         },
//       },
//     ]);

//     if (!data || data.length === 0) {
//       return res.status(404).json({
//         status: 404,
//         message: "User not found",
//         success: false,
//       });
//     }

//     io.emit("user_retrieved", {
//       message: "User data has been retrieved",
//       data: {
//         id: data[0]._id,
//         FullName: data[0].FullName,
//         Email: data[0].Email,
//         Phone: data[0].Phone,
//         empType: data[0].empType,
//         role: data[0].role,
//         salary: data[0].salary,
//         image: data[0].image,
//       },
//     });

//     return res.status(200).json({
//       status: 200,
//       data: data[0],
//       message: "User fetched successfully",
//       success: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: 500,
//       error: error.message,
//       message: "Server error",
//       success: false,
//     });
//   }
// };

export const getUserById = async (req, res, io) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: 400,
      message: "User ID is required",
      success: false,
    });
  }

  try {
    const data = await User.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) }, // Match the user by ID
      },
      {
        $unwind: {
          path: "$EventsBook",
          preserveNullAndEmptyArrays: true, // Keep users with no events
        },
      },
      {
        $lookup: {
          from: "events", // The "Event" collection
          localField: "EventsBook.eventId",
          foreignField: "_id",
          as: "EventDetails",
        },
      },
      {
        $unwind: {
          path: "$EventDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$_id",
          FullName: { $first: "$FullName" },
          Email: { $first: "$Email" },
          Phone: { $first: "$Phone" },
          role: { $first: "$role" },
          image: { $first: "$image" },
          Messages: { $first: "$Messages" },
          userCreatedAt: { $first: "$createdAt" },
          userUpdatedAt: { $first: "$updatedAt" },
          EventDetails: {
            $push: {
              _id: "$EventDetails._id",
              title: "$EventDetails.title",
              description: "$EventDetails.description",
              price: "$EventDetails.price",
              eventAddedAt: "$EventsBook.createdAt",
              eventUpdatedAt: "$EventsBook.updatedAt",
            },
          },
        },
      },
      {
        $lookup: {
          from: "messages",
          localField: "Messages",
          foreignField: "_id",
          as: "MessageDetails",
        },
      },
      {
        $addFields: {
          totalEvents: { $size: "$EventDetails" }, // Count total events
          totalMessages: { $size: "$MessageDetails" }, // Count total messages
        },
      },
      {
        $project: {
          Password: 0, // Exclude sensitive data
        },
      },
    ]);

    if (!data || data.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }

    io.emit("user_retrieved", {
      message: "User data has been retrieved",
      data: data[0],
    });

    return res.status(200).json({
      status: 200,
      data: data[0],
      message: "User fetched successfully",
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

export const updateUser = async (req, res, io) => {
  const { id } = req.params;
  const { FullName, Email, Phone } = req.body;

  try {
    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "User ID is required",
        success: false,
      });
    }
    await ConnectCloudinary();
    const imageUrlLocalPath = req.files?.imageUrl[0]?.path;
    console.log("imageUrlLocalPath", imageUrlLocalPath);

    // Upload images to Cloudinary
    let result = await cloudinary.uploader.upload(imageUrlLocalPath, {
      resource_type: "image",
    });

    const data = await User.findByIdAndUpdate(
      id,
      {
        FullName,
        Email,
        Phone,
        image: result.secure_url,
        cloudinary_public_id: result.public_id,
      },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      data,
      message: "User details updated successfully",
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

export const updateUserPassword = async (req, res, io) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "User ID is required",
        success: false,
      });
    }

    if (!password) {
      return res.status(400).json({
        status: 400,
        message: "Password is required",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { Password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      data: updatedUser,
      message: "Password updated successfully",
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

export const deleteUser = async (req, res, io) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "User ID is required",
        success: false,
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found.",
      });
    }

    // Extract public_id from the stored Cloudinary image URL
    const publicId = user.cloudinary_public_id; // find the cloudinary public_id in database
    console.log("public", publicId);
    // Delete the image from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      data: deletedUser,
      message: "User deleted successfully",
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

export const addMessageToUser = async (req, res, io) => {
  const { userId, messageId } = req.body;
  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }

    // Add message to the user's Messages array
    user.Messages.push(messageId);
    await user.save();

    return res.status(200).json({
      status: 200,
      message: "Message added to user successfully",
      data: user,
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
export const addEventToUser = async (req, res, io) => {
  const { userId, eventId } = req.body;
  console.log("userId, eventId", userId, eventId);

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        success: false,
      });
    }
    // Add event to the user's EventsBook array
    user.EventsBook.push({
      eventId: new mongoose.Types.ObjectId(eventId),
    });

    await user.save();

    return res.status(200).json({
      status: 200,
      message: "Event added to user successfully",
      data: user,
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

// export const getUsersWithBookedEvents = async (req, res, io) => {
//   try {
//     const users = await User.find({ EventsBook: { $exists: true, $ne: [] } })
//       .populate("EventsBook")
//       .exec();
//     console.log(users);
//     io.emit("usersWithBookedEvents", users);

//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to fetch users", error });
//   }
// };

// export const getUsersWithMessagesSent = async (req, res, io) => {
//   try {
//     const users = await User.find({ Messages: { $exists: true, $ne: [] } })
//       .populate("Messages")
//       .exec();

//     io.emit("usersWithMessagesSent", users);

//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to fetch users", error });
//   }
// };
