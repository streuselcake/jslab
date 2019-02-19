var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("homepage");
});

/* attaching about to index */
router.get("/about", function(req, res, next) {
  res.send("about this page ...");
});

/* attaching contact to index */
router.get("/contact", function(req, res, next) {
  res.send("contact page");
});

module.exports = router;
