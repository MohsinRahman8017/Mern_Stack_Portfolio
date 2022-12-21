const express = require("express");
const userRouter = express.Router();

const {login} = require('../controller/userController.js')

userRouter.post('/login',login)

module.exports = {userRouter}