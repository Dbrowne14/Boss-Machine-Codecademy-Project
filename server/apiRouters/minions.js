const express = require("express");
const minionsRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db.js");

const minions = "minions";

minionsRouter.get("/", (_, res) => {
  res.status(200).send(getAllFromDatabase(minions));
});

minionsRouter.post("/", (req, res) => {
  try {
    const newMinion = addToDatabase(minions, req.body);
    res.status(201).send(newMinion);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

minionsRouter.get("/:minionsId", (req, res) => {
  const minionsId = req.params.minionsId;
  const minion = getFromDatabaseById(minions, minionsId);
  if (!minion) {
    return res.status(404).send();
  }
  res.status(200).send(minion);
});

minionsRouter.put("/:minionsId", (req, res) => {
  const updatedMinion = { ...req.body, id: req.params.minionsId };
  try {
    const expectedResult = updateInstanceInDatabase(minions, updatedMinion);
    if (!expectedResult) {
      return res.status(404).send();
    }
    res.status(200).send(expectedResult);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

minionsRouter.delete("/:minionsId", (req, res) => {
  const minionsId = req.params.minionsId;
  const deleted = deleteFromDatabasebyId(minions, minionsId);
  if (!deleted) {
    return res.status(404).send();
  }
  res.status(204).send();
});

module.exports = minionsRouter;
