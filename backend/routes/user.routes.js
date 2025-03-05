const express = require("express");
const { new_user, login_user, get_profile } = require("../controllers");
const user_route = express.Router();

user_route.post("/new", new_user);
user_route.post("/login", login_user);
user_route.post("/get-profile", get_profile);

module.exports = user_route;
