var express = require('express');
var redis = require('redis');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hey")
});

module.exports = router;
