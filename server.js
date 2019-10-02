// npm packahes
// require express
// express-handlebars
// mysql

var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3030;
var app = express();


var handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
