const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const payment = require("../src/Payment/payment.controller");

router.post("/add", cleanBody, payment.payment);



module.exports = router;

