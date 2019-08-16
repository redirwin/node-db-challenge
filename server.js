const express = require("express");
const helmet = require("helmet");

const Projects = require("./routes/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api", Projects);

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!" });
});

module.exports = server;
