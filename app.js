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
const deleteId = db.prepare('DELETE FROM gyms WHERE id = ?')

let hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  app.use(express.static('public'));
  res.render('home');
  //res.render('home', {data: row.all()});
});

app.get('/gyms/create', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/creategym.html'));
});

app.get('/gyms/:id', function(req, res) {
  app.use(express.static('public'));
  var data = rowId.get(req.params.id);
  res.render('gyms', {data: data});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res) {
  console.log(req.body);
  stmt.run(req.body.name, req.body.adress, req.body.photo);
  res.redirect("/");
});
app.post('/gyms/:id', function(req, res) {
  console.log(req.body);
  deleteId.run(req.params.id);
  res.redirect("/");
});

app.get("/api/gyms", function(req, res) {
  let data = row.all();
  res.json(data);
  console.log(data);
});

app.post("/api/gyms", function(req, res) {
  stmt.run(req.body.name, req.body.adress, req.body.photo);
});

app.listen(3000);
