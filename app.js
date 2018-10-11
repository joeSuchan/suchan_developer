const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()  // make express app
const port = 8081

// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view
// 2 include public assets and use bodyParser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//3 


// 4 handle valid GET requests
app.get("/", function (req, res) {
 //res.sendFile(path.join(__dirname + '/assets/index.html'))
 res.render("index.ejs")
})

// 4 http GET /tic-tac-toe
app.get("/tipCalc", function (req, res) {
 res.render("tipCalc.ejs")
})

// 4 http GET /contact
app.get("/contact", function (req, res) {
 res.render("contact.ejs")
})
// 4 http GET /contact
app.get("/index", function (req, res) {
 res.render("index.ejs")
})

// 5 handle valid POST request
app.post("/contact", function (req, res) {
 const name = req.body.inputname;
 const email = req.body.inputemail;
 const company = req.body.inputcompany;
 const comment = req.body.inputcomment;
 const isError = true;
})

// 6 respond with 404 if a bad URI is requested
app.get(function (req, res) {
 res.render("404")
})

// Listen for an application request on port 8081
app.listen(port, function () {
  console.log('app listening on http://127.0.0.1:' + port)
})


