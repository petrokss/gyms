let express = require("express");
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

// app.use('/', express.static(__dirname, '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res) {
  console.log(req.body);
  res.send("recieved your request!");
  // console.log(submit());
});


// function submit() {
//   let date = document.getElementById('name');
//   // event.preventDefault();
//   // //let name = document.getElementsById("name");
//   // //let comment = document.getElementsByName("comment");
//   // console.log("name");
//   //console.log(comment);
//   return date;
// }

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
