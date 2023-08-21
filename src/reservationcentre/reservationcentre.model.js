const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const reservationcentreSchema = new Schema(
  {
    reservationcentreId: { type: String, unique: true, required: true },
    userId: {type: String, unique: false, required: true },
    datedepart: { type: Date, unique: false, required: false },
    datearrive: { type: String, unique: false, required: false },
    nameCentre: { type: String, unique: false, required: false },
    materiel:{ type: Array, unique: true, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const reservationcentre = mongoose.model("reservationcentre", reservationcentreSchema);
module.exports = reservationcentre;



