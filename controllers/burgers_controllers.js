/* Create all the functions that will handle all the routing for the app */

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(request, response) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        response.render('index.handlebars', hbsObject);
    });
}); // end router.get from database

router.post('/new', function(request, response) {
    if (request.body.newBurger !== "") {
        burger.create("burger_name", [request.body.newBurger], function(data) {
            response.redirect('/');
        });
    } else {
        response.redirect('/');
    }
}); // end router.post

router.put("/:id", function(request, response) {
    var condition = "id=" + request.params.id;
    burger.update({
        devoured: request.body.devoured
    }, condition, function(data) {
        response.redirect('/');
    });
}); // end router put

module.exports = router;
