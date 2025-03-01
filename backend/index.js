const express = require("express");
const http = require("http");
const connectDatabase = require("./config/connection");
const routes = require("./routes");
const cors = require("cors");
const app = express();
require("dotenv").config({
  path: "./config/.env",
});
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
app.use("/api", routes);
connectDatabase();
server.listen(process.env.DEV_PORT || 4000, () => {
  console.log(`server is working...`);
});
