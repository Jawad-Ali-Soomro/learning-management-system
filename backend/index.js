const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
server.listen(process.env.DEV_PORT || 4000, () => {
  console.log(`sever is working...`);
});
