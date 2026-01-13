const express = require("express");
const checkMillionDollars = require("../checkMillionDollarIdea.js");
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

ideasRouter.post("/", checkMillionDollars, (req, res) => {
  const idea = req.body;
  try {
    const newIdea = addToDatabase("ideas", idea);
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

ideasRouter.put(
  "/:ideasId",
  (req, res, next) => {
    const id = req.params.ideasId;

    if (Number.isNaN(Number(id))) {
      return res.status(404).send();
    }
    req.id = id;
    next();
  },
  checkMillionDollars,
  (req, res) => {
    try {
      const updateIdea = updateInstanceInDatabase("ideas", {
        ...req.body,
        id: req.id,
      });
      if (!updateIdea) {
        return res.status(404).send();
      }
      res.status(200).send(updateIdea);
    } catch (error) {
      res.status(404).send();
    }
  }
);

ideasRouter.delete("/:ideasId", (req, res) => {
  const deletedIdea = deleteFromDatabasebyId("ideas", req.params.ideasId);
  if (!deletedIdea) {
    return res.status(404).send();
  }
  res.status(204).send();
});

module.exports = ideasRouter;
