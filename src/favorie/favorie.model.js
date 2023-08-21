const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const favorieSchema = new Schema(
  {
    favorieId: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    image: { type: String, unique: true, required: true },
    rating: { type: String, unique: true, required: true },
    prix: { type: String, unique: true, required: true },
    
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const favorie = mongoose.model("favorie", favorieSchema);
module.exports = favorie;



