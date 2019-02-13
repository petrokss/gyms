let express = require("express");
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const db = new Database('dataBase.db', { verbose: console.log });

// //onst row = db.prepare('SELECT * FROM users WHERE id=?').get(userId);
// const row = db.prepare('SELECT * FROM users WHERE id=?');
// console.log(row.firstName, row.lastName);



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res) {
  console.log(req.body.name);
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
