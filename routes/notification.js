const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const notificationController = require("../src/notification/notification.controller");


router.post("/notificationPost", cleanBody, notificationController.notificationPost);
router.get("/notificationGetAll", notificationController.notificationGetAll);




module.exports = router;
