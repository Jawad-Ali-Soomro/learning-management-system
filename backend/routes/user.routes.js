const express = require("express");
const { new_user, login_user } = require("../controllers");
const user_route = express.Router();

user_route.post("/new", new_user);
user_route.post("/login", login_user);

module.exports = user_route;
