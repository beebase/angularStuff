var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');

var app = express();
var publicRoot = __dirname + '/public';
app.use(express.static(publicRoot));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/test', function(req, res) {
  res.send('test is working');
});
app.all('/', function(req, res, next) {
  res.sendFile('index.html', {root: publicRoot});
});

http.createServer(app).listen(4000);
