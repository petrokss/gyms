let express = require("express");
let path = require('path');
let app = express();
let exphbs  = require('express-handlebars');
let bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const db = new Database('dataBase.db', { verbose: console.log });
const stmt = db.prepare('INSERT INTO users (login, password) VALUES (?, ?)');

let hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, '/public/index.html'));
  res.render('home');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res) {
  console.log(req.body);
  stmt.run(req.body.name, req.body.password)
  res.send("recieved your request!");

});

app.listen(3000);
