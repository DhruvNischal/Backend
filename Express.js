const db = require("./db");
const express = require("express");
const app = express();
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Hello World Welcome to my Hotel.. How can I help you ?");
});

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Listening to Port 8000");
});
