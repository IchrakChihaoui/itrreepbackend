const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const matrielController = require("../src/matriel/matriel.controller");


router.post("/matrielPost", cleanBody, matrielController.matrielPost);
router.get("/matrielGetAll", matrielController.matrielGetAll);
router.post("/matrielGetByName", matrielController.matrielGetByName);
router.delete("/deletematriel/:id", matrielController.deletematriel);



module.exports = router;
