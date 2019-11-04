// npm packahes
// require express
// express-handlebars
// mysql

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expresshandlebars = require('express-handlebars');
// var PORT = process.env.port || 3001;

var port = 3001;
var app = express();

// app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('method'));


app.engine('handlebars', expresshandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port, function() {
    console.log("App listening on PORT:", port);
});
