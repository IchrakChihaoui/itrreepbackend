const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const reservationrandonneSchema = new Schema(
  {
    reservationrandonneId: { type: String, unique: true, required: true },
    userId: {type: String, unique: false, required: true },
    datedepart: { type: Date, unique: false, required: false },
    datearrive: { type: String, unique: false, required: false },
    nameRandonne: { type: String, unique: false, required: false },
    guide: { type: Array, unique: true, required: true },
    transport:{ type: Array, unique: true, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const reservationrandonne = mongoose.model("reservationrandonne", reservationrandonneSchema);
module.exports = reservationrandonne;



