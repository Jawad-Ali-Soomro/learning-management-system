const express = require("express");
const http = require("http");
const connectDatabase = require("./config/connection");
const routes = require("./routes");
const app = express();
require("dotenv").config({
  path: "./config/.env",
});
const server = http.createServer(app);
app.use("/api", routes);
connectDatabase();
server.listen(process.env.DEV_PORT || 4000, () => {
  console.log(`server is working...`);
});
