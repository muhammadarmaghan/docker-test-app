const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
//const redis = require('redis');
const mongoose = require("mongoose");

const UsersRoutes = require("./routes/users.routes");

const redis = require("./config/redis");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


const mongoCon = process.env.mongoCon || "mongodb://localhost:27017/nodejs-redis";

mongoose.connect(mongoCon, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const redisFunction = async () =>{
    await redis.set("value", "Redis Server is connected...!");
    console.log(await redis.get("value"));
}
redisFunction();

//Functions

// const client = redis.createClient({
//     socket: {
//         host: 'localhost',
//         port: '6379'
//     }
// });
// client.connect();

// client.on('error', err => console.log('Redis Server Error', err));



app.get("/", function (req, res) {
    res.status(200).send({
        message: "Nodejs-Redis backend server",
    });
});

app.set("port", process.env.PORT || 3700);

app.use(cors());

app.use("/api/users", UsersRoutes);


server.listen(app.get("port"));
console.log("listening on port", app.get("port"));