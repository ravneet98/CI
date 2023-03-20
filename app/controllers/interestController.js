const Interest = require("../models/interest");

class InterestController {
  static index(req, res) {
    res.render("index");
  }

  static calculate(req, res) {
    const { principal, rate, time } = req.body;
    const interest = Interest.calculate(principal, rate, time);
    res.json({ interest });
  }
}

module.exports = InterestController;
