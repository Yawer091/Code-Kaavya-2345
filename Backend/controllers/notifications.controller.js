const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");
const Notification = require("../models/Notification.model");

exports.addNewNotification = async (req, res, next) => {};

exports.getNotifications = async (req, res, next) => {
  try {
    const userId = req.userId;
    const notifications = await Notification.find({ userId });
    const formattedNotifications = notifications.map((notification) => {
      const notificationTime = new Date(notification.time);
      const formattedTime = notificationTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      return {
        message: notification.message,
        time: formattedTime,
        type: notification.type,
        senderImage: notification.senderImage,
      };
    });
    res.status(200).json({
      message: "Fetched Notifications",
      notifications: formattedNotifications,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to get notifications" });
  }
};
