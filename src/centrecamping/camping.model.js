const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const campingSchema = new Schema(
  {
    campingId: { type: String, unique: true, required: true },
    namecentre: { type: String, unique: true, required: true },
    adressecentre: { type: String, unique: true, required: true },
    imagecentre: { type: String, unique: true, required: true },
    tarifcentre: { type: String, unique: true, required: true },
    ratingcentre: { type: String, unique: true, required: true },
    oldratingcentre: { type: String, unique: true, required: true },
    description: { type: String, unique: true, required: true },
    activite: { type: Array, unique: true, required: true },
    Category: { type: String, unique: true, required: true },

  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const camping = mongoose.model("camping", campingSchema);
module.exports = camping;



