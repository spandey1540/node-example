const express = require("express");

/**
 * Other Modules Required
 */

const bodyparser = require("body-parser");
const mongoose = require("mongoose");
var morgan = require("morgan");

/**
 * middlewares
 */
const logger = require("./Middleware/logger");

/**
 * other applications files
 */
const configData = require("./config.json");
const Routes = require("./Routes/Index");

/**
 * connection to database
 */
if (configData.env.NODE_ENV !== "live") {
  mongoose.connect(configData.testdb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log("Running in Development Mode....");
} else {
  mongoose.connect(configData.livedb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log("Running in Live Mode....");
}

var app =  express();

app.use(morgan("tiny"));

app.use(
  bodyparser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyparser.json());

app.use("/", logger, Routes);
app.listen(configData.port, () =>
  console.log(`Example app listening on port ${configData.port}!`)
);

module.exports = app;
