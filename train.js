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


{/* <script>
function fetchData() {
  let str = "";
  fetch('/api/gyms').then(function (res) {
    return res.json();
  }).then(function (resolve) {
    resolve.forEach((elem) => {
      str += "name: " + elem.name + ", adress: " + elem.adress + ", photo link:" + elem.photo;
      document.getElementById("gyms").innerHTML = str;
    });
  }).catch(function (err) {
    console.log(err);
  });
}
</script> */}

// str += "<img src='" + elem.photo  + "' alt= '" + elem.name + "</div>" +
// "<div class="card-body"><h5 class="card-title">" + elem.name + "</h5>" +
// "<p class="card-text">" + elem.adress + "</p>" +
// "<div class="col-md-4 text-center">" +
// "<a href="/gyms/"" + elem.id + "'class="btn btn-primary">Details</a> " + "</div></div></div>";
//document.getElementById("gyms").innerHTML = str;

{/* <script>
function fetchData() {
  fetch('/api/gyms').then(function (res) {
    return res.json();
  }).then(function (resolve) {
    resolve.forEach((elem) => {
      console.log(elem.id+ ", " + elem.name + ", " + elem.adress);
    });
  }).catch(function (err) {
    console.log(err);
  });
}
</script> */}

{/* <body>
  <div class="card-group">
    {{#each data}}
    <div class="card">
      <div class="img-content"> <img src="{{this.photo}}" alt="{{this.name}}"></div>
      <div class="card-body">
        <h5 class="card-title">{{this.name}}</h5>
        <p class="card-text">{{this.adress}}</p>
        <div class="col-md-4 text-center">
          <a href="/gyms/{{this.id}}" class="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
    {{/each}}
  </div>
  <a href="/gyms/create" class="btn btn-primary">Create Gym</a>
</body> */}
{/* <script>
function MyFunction() {

  const p = fetch('/api/gyms');
  p.then(function (response) {
    return response.json();
  }).then(function (resolve) {
    console.log(resolve);
  }).catch(function (err) {
    console.log(err);
  })
}
</script> */}


// <script>
// let str = "<div class=\"card\">" + "<div class=\"img-content\">";
// fetch('/api/gyms').then(function (res) {
//   const p = res.json();
//   return p;
// }).then(function (resolve) {
//   console.log(resolve);
//   resolve.forEach((elem) => {
//     str += "<img src=\"" + elem.photo + "\"></div>" +
//     "<div class=\"card-body\">" + "<h5 class=\"card-title\">" + 
//     elem.name + "</h5>" + "<p class=\"card-text\">" + elem.adress + "</p>" +
//     "<div class=\"col-md-4 text-center\">" +
//     "<a href=\"/gyms/" + elem.id + "\" class=\"btn btn-primary\">Details</a></div></div></div>";
//     document.getElementById("gyms").innerHTML = str;
//     console.log(str);
//   });
// }).catch(function (err) {
//   console.log(err);
// });
// </script>


// str += "<img src=\"" + elem.photo + "\"></div>" +
//           "<div class=\"card-body\">" + "<h5 class=\"card-title\">" +
//           elem.name + "</h5>" + "<p class=\"card-text\">" + elem.adress + "</p>" +
//           "<div class=\"col-md-4 text-center\">" +
//           "<a href=\"/gyms/" + elem.id + "\" class=\"btn btn-primary\">Details</a></div></div></div>";
{/* <button type="button" onclick="asd(0)" id="update" value="Hide Form">Hide Form</button> */}