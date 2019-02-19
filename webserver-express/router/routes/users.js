var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource for users (e.g. overview list of users)");
});

/* GET particular user; attaching /id to /users -> /users/id */
router.get("/id", function(req, res, next) {
  res.send("respond with the data associated with the given id");
});

/* PUT to "change" user */
// router.put(...)

/* POST to "create" user */
// router.post(...)


module.exports = router;
