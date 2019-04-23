let express = require("express");
let path = require('path');
let app = express();
let exphbs  = require('express-handlebars');
let bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const db = new Database('gyms.db', { verbose: console.log });
//const stmt = db.prepare('INSERT INTO users (login, password) VALUES (?, ?)');
const row = db.prepare('SELECT * FROM gyms');

let hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  app.use(express.static('public'));
  res.render('home', {data: row.all()});
});

app.get('/user/gyms/:id', function(req, res) {
  // app.use(express.static('public'));
  // res.render('home', {data: row.all()});
  // res.send("you're at the page" + req.param.name);
  // res.send('user ' + req.params.id);
  res.send('Hello!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res) {
  //console.log(req.body);
  //stmt.run(req.body.name, req.body.password)
  res.send("recieved your request!");
});

app.listen(3000);





















// let i = 0;

// function handleRequest(req, res) {
//   console.log("handleRequest", ++i);
//   responseText = new Date().toTimeString();
//   res.send(responseText);
// }

// function handleRequest2(req, res) {
//   console.log("handleRequest2", ++i);
//   res.send(Math.random() * 1000 + "");
// }

// ``
// app.post("/abc", handleRequest2);

// app.listen(3000);
// app.listen(3000);
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });
// app.listen(3000);
