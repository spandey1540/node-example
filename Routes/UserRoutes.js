const express = require("express");
const router = express.Router();

// list of controllers

const userController = require("../Controllers/UsersController");

router.route("signup").post(userController.signUp);

exports.Router = router;
