const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const reservationrandonneController = require("../src/reservationrandonne/reservationrandonne.controller");


router.post("/reservationrandonnePost", cleanBody, reservationrandonneController.reservationrandonnePost);
router.get("/reservationrandonneGetAll", reservationrandonneController.reservationrandonneGetAll);
router.get("/reservationrandonneGetByName", reservationrandonneController.reservationrandonneGetByName);



module.exports = router;
