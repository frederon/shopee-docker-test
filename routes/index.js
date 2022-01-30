var express = require('express');
var redis = require('../redis');
var ip = require("ip")
var router = express.Router();

/* Connect redis and increment hits */
router.get('/', async function (req, res, next) {
  const clientIP = ip.address()
  await redis.incr(clientIP)

  const hits = await redis.get(clientIP)

  res.send(`
  User address = ${clientIP}
  Hits: ${hits}
  `)
});

module.exports = router;
