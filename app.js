const express = require("express");

const app = express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.json());
require("./routes")(app);


require("./util/database")({
    mongo: {
        uri: process.env.MONGO_URI,
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }
    }
})

app.listen(process.env.PORT, function () {
    console.log("Server Started at " + process.env.PORT );
})