// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require('moment');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/whoami", function (request, response) {
  const ip = request.headers['x-forwarded-for'].split(',').shift() || request.connection.remoteAddress;
  const lang = request.headers["accept-language"].split(',').shift();
  const os = request.headers['user-agent'].split(/\(([^()]*)\)/g)[1];
  const final = {"ipaddress": ip, "language": lang, "software": os };
  response.send(final);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
