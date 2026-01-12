const express = require("express");
const ideasRouter = express.Router();

const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db.js");

ideasRouter.get("/", (_, res) => {
  res.status(200).send(getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res) => {
  try {
    const newIdea = addToDatabase("ideas", req.body);
    res.status(201).send(newIdea);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

ideasRouter.get("/:ideasId", (req, res) => {
  const getIdea = getFromDatabaseById("ideas", req.params.ideasId);
  if (!getIdea) {
    return res.status(404).send();
  }
  res.status(200).send(getIdea);
});

ideasRouter.put("/:ideasId", (req, res) => {
  try {
    const updateIdea = { ...req.body, id: req.params.ideasId };
    if (!updateIdea) {
      return res.status(404).send();
    }
    if (typeof Number(updateIdea.id) != "number") {
      return res.status(404).send();
    }
    res.status(200).send(updateInstanceInDatabase("ideas", updateIdea));
  } catch (error) {
    res.status(400).send();
  }
});

ideasRouter.delete("/:ideasId", (req, res) => {
  const deletedIdea = deleteFromDatabasebyId("ideas", req.params.ideasId);
  if (!deletedIdea) {
    return res.status(404).send();
  }
  res.status(204).send();
});

module.exports = ideasRouter;
