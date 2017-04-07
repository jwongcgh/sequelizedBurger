// packages requirements
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// model dependency
var db = require("./models/index.js");

// setting up connection engine and view engine
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main.handlebars'}));
app.set('view engine', 'handlebars');

// serve static content for the app from the public directory in the application directory
app.use(express.static("./public"));

// override post with _method and allow put, patch and delete
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));

// allow server to have access to routes/routing scheme
var routes = require("./controllers/burgers_controllers.js");

app.use('/', routes);

// connection
var PORT = process.env.PORT || 3000;

// sync model to database and start connection
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
});
