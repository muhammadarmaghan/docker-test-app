const redis = require("redis");

const client = redis.createClient({
    legacyMode: true,
    socket : {
    host: process.env.REDIS_HOST,
    port: 6379
    }
});

client.connect();

module.exports = client;