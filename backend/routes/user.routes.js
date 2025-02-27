const express = require("express");
const { new_user } = require("../controllers/user.contoller");
const user_route = express.Router();

user_route.post("/new", new_user);

module.exports = user_route;
