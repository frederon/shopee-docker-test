const redis = require('redis');

const connection = redis.createClient()
connection.connect()

connection.on('ready', () => console.log("Redis connected"));
connection.on('error', () => console.log("Redis error"));
connection.on('end', () => console.log("Redis connection closed"));

module.exports = connection;