const express = require('express');
const router = express.Router();

// list routes
const userRoutes = require("./UserRoutes").Router;


//middleware

router.use('/user',userRoutes);


module.exports = router;