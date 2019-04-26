let express = require("express");
let path = require('path');
let app = express();
let exphbs  = require('express-handlebars');
let bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const db = new Database('gyms.db', { verbose: console.log });
const stmt = db.prepare('INSERT INTO gyms (name, adress, photo) VALUES (?, ?, ?)');
const row = db.prepare('SELECT * FROM gyms');
const rowId = db.prepare('SELECT * FROM gyms WHERE id = ?');
// const createGym = db.prepare('INSERT INTO gyms (name, adress, photo) VALUES (?, ?, ?)');

let hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  app.use(express.static('public'));
  res.render('home', {data: row.all()});
});

app.get('/gyms/create', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/creategym.html'));
});

app.get('/gyms/:id', function(req, res) {
  app.use(express.static('public'));
  var data = rowId.get(req.params.id);
  res.render('gyms', {data: data});
  //console.log('ID:', data);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res) {
  //console.log(req.body);
  //stmt.run(req.body.name, req.body.password)
  res.send("recieved your request!");
});

app.post('/gyms/create', function(req, res) {
  console.log(req.body);
  stmt.run(req.body.name, req.body.adress, req.body.photo);
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
