const express = require("express");
const Routes = express.Router();
const userProccess = require("../controller/user")

Routes.get("/login", userProccess.login);
Routes.get("/register", userProccess.register);

module.exports = Routes;