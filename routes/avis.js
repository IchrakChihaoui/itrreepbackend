const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const avisController = require("../src/avis/avis.controller");


router.post("/avisPost", cleanBody, avisController.avisPost);




module.exports = router;
