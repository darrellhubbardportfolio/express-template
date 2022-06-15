// require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// express static files
app.use('/public', express.static(path.join(__dirname, 'public')))

// home page
app.get("/", function (req, res) {
  res.render("home");
});

const port = process.env.PORT || 4500;
app.listen(port, function () {
  console.log("Server is listening to port " + port);
});
