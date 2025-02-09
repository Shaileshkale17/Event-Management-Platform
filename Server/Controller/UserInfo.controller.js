import { User } from "../model/User.model.js";

export const getUsersWithBookedEvents = async (req, res) => {
  try {
    const users = await User.find({ EventsBook: { $exists: true, $ne: [] } })
      .populate("EventsBook")
      .exec();

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
