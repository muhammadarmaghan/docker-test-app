const redis = require("redis");

const client = redis.createClient({
    host: process.env.redisHost,
    port: 6379,
});

client.connect();

module.exports = client;