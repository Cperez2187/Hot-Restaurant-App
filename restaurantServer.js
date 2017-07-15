const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const = app = express();
const PORT = process.env.PORT || 3000;

var reservations = [{
	customerName: "MrCustomer",
	customerEmail: "email@gmail.com",
	customerID: 0001,
	phoneNumber: "999-999-9999"
}];

var waitList = [{
	customerName: "waitingPerson",
	customerEmail: "email@gmail.com",
	customerID: 0002,
	phoneNumber: "888-888-8888"
}];

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/tables", function(req, res) {
	//Not sure yet?
});
