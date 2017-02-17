// packages requirements
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// we need mysql schema setup beforehand
var mysql = require('mysql');

// setting up connection engine and view engine
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main.handlebars'}));
app.set('view engine', 'handlebars');

// serve static content for the app from the public directory in the application directory
app.use(express.static(process.cwd() + "/public"));

// override post with _method and allow put, patch and delete
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));

// allow server to have access to routes/routing scheme
var routes = require("./controllers/burgers_controllers.js");

app.use('/', routes);

// connection
var port = process.env.port || 3000;
app.listen(port);
