const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const campingController = require("../src/centrecamping/camping.controller");


router.post("/campingPost", cleanBody, campingController.campingPost);
router.get("/campingGetAll", campingController.campingGetAll);
router.post("/campingGetByName", campingController.campingGetByName);



module.exports = router;
