import { User } from "../model/User.model.js";
/**export const getUsersWithBookedEvents = async (req, res) => {
  try {
    let users = await User.aggregate([
      {
        $unwind: {
          path: "$EventsBook",
          preserveNullAndEmptyArrays: true, // Include users with no booked events
        },
      },
      {
        $lookup: {
          from: "events", // Ensure this is the correct collection name
          localField: "EventsBook.eventId",
          foreignField: "_id",
          as: "EventDetails",
        },
      },
      {
        $unwind: {
          path: "$EventDetails",
          preserveNullAndEmptyArrays: true, // Ensure users with no event details are included
        },
      },
      {
        $group: {
          _id: "$_id",
          FullName: { $first: "$FullName" },
          Email: { $first: "$Email" },
          Password: { $first: "$Password" },
          Messages: { $first: "$Messages" },
          Executive: { $first: "$Executive" },
          role: { $first: "$role" },
          image: { $first: "$image" },
          EventsBook: { $push: "$EventsBook" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
          EventDetails: { $push: { $ifNull: ["$EventDetails", []] } }, // Ensure array
        },
      },
    ]);

    req.io.emit("usersWithBookedEvents", users);
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users with booked events:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users with booked events.",
      error: error.message,
    });
  }
};
 */
export const getUsersWithBookedEvents = async (req, res) => {
  try {
    let users = await User.aggregate([
      {
        $unwind: {
          path: "$EventsBook",
          preserveNullAndEmptyArrays: true, // Include users without events
        },
      },
      {
        $lookup: {
          from: "events", // The actual collection name in MongoDB
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
          Password: { $first: "$Password" },
          Messages: { $first: "$Messages" },
          Executive: { $first: "$Executive" },
          role: { $first: "$role" },
          image: { $first: "$image" },
          EventsBook: { $push: "$EventsBook" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
          // EventDetails: { $push: { $ifNull: ["$EventDetails", []] } }, // Ensure array
        },
      },
    ]);
    req.io.emit("usersWithBookedEvents", users);
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users with booked events:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users with booked events.",
      error: error.message,
    });
  }
};

export const getUsersWithMessagesSent = async (req, res) => {
  try {
    const users = await User.find({ Messages: { $exists: true, $ne: [] } })
      .populate("Messages")
      .exec();

    req.io.emit("usersWithMessagesSent", users);

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users with messages sent:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users with messages sent.",
      error: error.message,
    });
  }
};
