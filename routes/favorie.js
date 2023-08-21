const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const favorieController = require("../src/favorie/favorie.controller");


router.post("/favoriePost", cleanBody, favorieController.favoriePost);
router.get("/favorieGetAll", favorieController.favorieGetAll);
router.post("/favorieGetByName", favorieController.favorieGetByName);
router.delete("/deleteFavorie/:id", favorieController.deleteFavorie);



module.exports = router;
