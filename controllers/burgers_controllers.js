/* Create all the functions that will handle all the routing for the app */

var express = require("express");
var router = express.Router();
var db = require("../models");

router.get('/', function(request, response) {
  db.Burger.findAll({}).then(function(results) {
    var hbsObject = {
            burgers: results
        };
    response.render('index.handlebars', hbsObject);
  })
}); // end router find all items

router.post('/new', function(request, response) {
    if (request.body.newBurger !== "") {
      db.Burger.create({
        burger_name: request.body.newBurger,
        devoured: "false"
      }).then(function (results) {
        response.redirect('/');
      })
    } else {
        response.redirect('/');
    }
}); // end router.post

router.put("/:id", function(request, response) {
  db.Burger.update ({
    devoured: request.body.devoured
  }, {
    where: {
      id: request.params.id
    }
  }).then(function(results) {
      response.redirect('/');
    })
}); // end router put

module.exports = router;
