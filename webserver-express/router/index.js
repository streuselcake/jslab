// jshint esversion: 6
// jshint node: true
"use strict";


// usage:
// $ npm init
// $ npm install express --save
// $ node .
// -> open in browser: http://localhost:3000/

const express = require("express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const app = express();
const port = 3000;

// define a route for url path
app.get("/helloworld", (req, res) => res.send("Hello World!"));

// regular expressions
app.get("/regex/[a-z0-9]*", (req, res) => res.send("expression in " + req.url + " matched [a-z0-9]."));

// redirect browser
app.get("/whereishome", (req, res) => res.redirect("/"));

// other http methods
app.get("/form", (req, res) => res.send("get item"));
app.post("/form", (req, res) => res.send("add item"));
app.put("/form", (req, res) => res.send("update item"));

// can group routes with router
app.use("/", indexRouter);
app.use("/users", usersRouter);


app.listen(port, () => console.log("Example app listening on port " + port + "!"));
