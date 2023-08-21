const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const avisSchema = new Schema(
  {
    avisId: { type: String, unique: true, required: true },
    Commentaire: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const avis = mongoose.model("avis", avisSchema);
module.exports = avis;



