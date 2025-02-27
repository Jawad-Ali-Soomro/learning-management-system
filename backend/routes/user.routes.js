const express = require("express");
const { new_user } = require("../controllers");
const user_route = express.Router();

user_route.post("/new", new_user);

module.exports = user_route;
