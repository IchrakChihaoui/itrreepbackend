const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const randonneSchema = new Schema(
  {
    randonneId: { type: String, unique: false, required: true },
    namerandonne: { type: String, unique: false, required: true },
    adresserandonne: { type: String, unique: false, required: true },
    imagerandonne: { type: String, unique: false, required: true },
    tarifrandonne: { type: String, unique: false, required: true },
    ratingrandonne: { type: String, unique: false, required: true },
    oldtarif: { type: String, unique: false, required: true },
    description: { type: String, unique: false, required: true },
    activite: { type: Array, unique: false, required: true },
    Category: { type: String, unique: false, required: true },
    guide: { type: [{ name: String, image: String, tarif: String }], unique: false, required: true },
    transport: { type: [{ model: String, image: String, tarif: String }], unique: false, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const randonne = mongoose.model("randonne", randonneSchema);
module.exports = randonne;



