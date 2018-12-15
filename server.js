// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// required data arrays
var tables = require(tableArray);
var waitlist = require(waitlistArray);

// waitlist & table js data 
app.get("/api/table", function(req, res) {
    res.json(tableArray);
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitlistArray);
});


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/reserve", function(req, res) {
   res.sendFile(path.join(__dirname, "reserve.html"));
 });

 app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "tables.html"));
 });

 app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "index.html"));
 });

 // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });