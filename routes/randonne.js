const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const randonneController = require("../src/randonne/randonne.controller");


router.post("/randonnePost", cleanBody, randonneController.randonnePost);
router.get("/randonneGetAll", randonneController.randonneGetAll);
router.get("/randonneGetByName", randonneController.randonneGetByName);



module.exports = router;
