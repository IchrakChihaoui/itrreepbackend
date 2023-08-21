const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const matrielSchema = new Schema(
  {
    MatrielId: { type: String, unique: true, required: true },
    NameMatriel: { type: String, unique: true, required: true },
    PrixMatriel: { type: String, unique: true, required: true },
    quantiteMatriel: { type: String, unique: true, required: true },
    ImageMatriel: { type: String, unique: true, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const matriel = mongoose.model("matriel", matrielSchema);
module.exports = matriel; 


