var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var models = require("./models");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/*+json" }));

app.get("/auth/signup", (req, res) => {
  models.users.findAll({}).then(user => res.json(user));
});

app.post("/auth/signup", (req, res) => {
  const newUser = new models.users({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname
  });
  newUser.save();
});

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000);
});
