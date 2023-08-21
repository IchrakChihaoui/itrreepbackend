const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const reservationcentreController = require("../src/reservationcentre/reservationcentre.controller");


router.post("/reservationcentrePost", cleanBody, reservationcentreController.reservationcentrePost);
router.get("/reservationcentreGetAll", reservationcentreController.reservationcentreGetAll);
router.get("/reservationcentreGetByName", reservationcentreController.reservationcentreGetByName);
router.get("/reservationcentreGetLastDate", reservationcentreController.reservationcentreGetLastDate);



module.exports = router;
