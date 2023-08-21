const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const meteoSchema = new Schema(
  {
    meteoId: { type: String, unique: true, required: true },
    temperature: { type: String, unique: true, required: true },
    date: { type: String, unique: true, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const meteo = mongoose.model("meteo", meteoSchema);
module.exports = meteo; 


