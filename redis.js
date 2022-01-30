const redis = require('redis');

let options = {}
if (process.env.NODE_ENV === 'production') {
  console.log("Prod env")
  options = {
    host: 'redis-server',
    port: 6379
  }
}

const connection = redis.createClient(options)
connection.connect()

connection.on('ready', () => console.log("Redis connected"));
connection.on('error', () => console.log("Redis error"));
connection.on('end', () => console.log("Redis connection closed"));

module.exports = connection;