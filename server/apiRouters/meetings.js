const express = require("express");
const meetingsRouter = express.Router();

const {
  getAllFromDatabase,
  createMeeting,
  deleteAllFromDatabase,
} = require("../db.js");

meetingsRouter.get("/", (_, res) => {
  res.status(200).send(getAllFromDatabase("meetings"));
});

meetingsRouter.post("/", (_, res) => {
  res.status(201).send(createMeeting());
});

meetingsRouter.delete("/", (_, res) => {
  deleteAllFromDatabase("meetings");
  res.status(204).send();
});

module.exports = meetingsRouter;
