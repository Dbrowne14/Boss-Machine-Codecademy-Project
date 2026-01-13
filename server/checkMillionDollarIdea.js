const checkMillionDollarIdea = (req, res, next) => {
  const weeklyRevenue = Number(req.body.weeklyRevenue);
  const numWeeks = Number(req.body.numWeeks);

  if (!weeklyRevenue || !numWeeks) {
    return res.status(400).send();
  }

  if (Number.isNaN(weeklyRevenue) || Number.isNaN(numWeeks)) {
    return res.status(400).send();
  }

  if (numWeeks * weeklyRevenue < 1000000) {
    return res.status(400).send("not a million dolalr idea");
  }
  next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
