// npm packahes
// require express
// express-handlebars
// mysql

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var PORT = process.env.port || 3001;

var port = 3001;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('method'));

var expresshandlebars = require('express-handlebars');

app.engine('handlebars', expresshandlebars());
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port, function() {
    console.log("Server running on localhost :", port);
});
