const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const meteoController = require("../src/meteo/meteo.controller");


router.post("/meteoPost", cleanBody, meteoController.meteoPost);
router.get("/meteoGetAll", meteoController.meteoGetAll);
router.post("/meteoGetByName", meteoController.meteoGetByName);




module.exports = router;
