import Message from "../model/Message.mode.js";

// Create a new message
export const createMessage = async (req, res, io) => {
  const { FirstName, LastName, Email, Phone, enquiry, Messages } = req.body;

  try {
    const newMessage = await Message.create({
      FirstName,
      LastName,
      Email,
      Phone,
      enquiry,
      Messages,
    });

    return res.status(201).json({
      status: 201,
      data: newMessage,
      message: "Message created successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error while creating message",
      success: false,
    });
  }
};

// Get all messages
export const getAllMessages = async (req, res, io) => {
  try {
    const messages = await Message.find();

    io.emit("messages_retrieved", {
      message: "All messages have been retrieved",
      count: messages.length,
      data: messages,
    });
    return res.status(200).json({
      status: 200,
      data: messages,
      message: "Fetched all messages successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error while fetching messages",
      success: false,
    });
  }
};

// Get a single message by ID
export const getMessageById = async (req, res, io) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 400,
        message: "Invalid message ID",
        success: false,
      });
    }

    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).json({
        status: 404,
        message: "Message not found",
        success: false,
      });
    }
    io.emit("message_retrieved", {
      message: "An message has been retrieved",
      data: {
        id: message._id,
        FirstName: message.FirstName,
        LastName: message.LastName,
        Email: message.Email,
        Phone: message.Phone,
        enquiry: message.enquiry,
        Messages: message.Messages,
        createdAt: message.createdAt,
        updatedAt: message.updatedAt,
      },
    });
    return res.status(200).json({
      status: 200,
      data: message,
      message: "Fetched message successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error while fetching message",
      success: false,
    });
  }
};

// Update a message by ID
export const updateMessage = async (req, res, io) => {
  const { id } = req.params;
  const { FirstName, LastName, Email, Phone, enquiry, Messages } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 400,
        message: "Invalid message ID",
        success: false,
      });
    }

    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { FirstName, LastName, Email, Phone, enquiry, Messages },
      { new: true } // Return the updated document
    );

    if (!updatedMessage) {
      return res.status(404).json({
        status: 404,
        message: "Message not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      data: updatedMessage,
      message: "Message updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error while updating message",
      success: false,
    });
  }
};

// Delete a message by ID
export const deleteMessage = async (req, res, io) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 400,
        message: "Invalid message ID",
        success: false,
      });
    }

    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({
        status: 404,
        message: "Message not found",
        success: false,
      });
    }

    return res.status(200).json({
      status: 200,
      data: deletedMessage,
      message: "Message deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
      message: "Server error while deleting message",
      success: false,
    });
  }
};
