const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    notificationId: { type: String, unique: false, required: true },
    titre: { type: String, unique: false, required: true },
    message: { type: String, unique: false, required: true },
    dateCreation: { type: String, unique: false, required: true },
    
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const notification = mongoose.model("notification", notificationSchema);
module.exports = notification;



