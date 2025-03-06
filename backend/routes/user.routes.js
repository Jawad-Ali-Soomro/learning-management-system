const express = require("express");
const {
  new_user,
  login_user,
  get_profile,
  update_profile,
  get_user,
} = require("../controllers");
const user_route = express.Router();

user_route.post("/new", new_user);
user_route.post("/login", login_user);
user_route.post("/get-profile", get_profile);
user_route.patch("/update/:user_id", update_profile);
user_route.patch("/get/:user_id", get_user);

module.exports = user_route;
