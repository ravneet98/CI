const express = require("express");
const path = require("path");
const Interest = require("./app/models/interest");

const app = express();

app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/calculate", (req, res) => {
  const { principal, rate, time } = req.body;
  const interest = Interest.calculate(principal, rate, time);
  res.render("result", { interest });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
