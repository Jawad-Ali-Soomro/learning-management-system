const express = require("express");
const user_route = require("./user.routes");
const routes = express.Router();

routes.use("/user", user_route);

module.exports = routes;
