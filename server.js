const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

require('dotenv').config()
const path = require ("path");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(morgan('dev')); // for logging
console.log("process.env log", process.env.NODE_ENV);
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "public")));
// }

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI;

mongoose.Promise = Promise;
mongoose
	.connect(MONGODB_URI,
	{ useNewUrlParser: true });


// Add routes, both API and view
app.use(routes);
// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
