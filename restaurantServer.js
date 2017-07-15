const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
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

// Routes to all the html files:
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});


// returns JSON objects for all reservations:
app.get("/api/:reservations?", function(req, res) {
    for (i in reservations) {
        return res.json(reservations[i]);
    }
});

// returns JSON objects for all waitlisted people:
app.get("/api/:waitlist?", function(req, res) {
    for (i in waitList) {
        return res.json(waitlist[i]);
    }
});

// Takes in logic from form:
app.post("/api/tables", function(req, res) {
	//Not sure yet? Will need to push to reservation thing if table available, will push to waitlist if table not available.
})


// Listener:
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
