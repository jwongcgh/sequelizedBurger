/* setup a model for how to interface with the database */

// the logic is inside orm.js
var orm = require("../config/orm.js");

// database functions
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(response) {
            cb(response);
        }); // end selectAll
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(response) {
            cb(response);
        }); // end create
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(response) {
            cb(response);
        });
    }
} // end burger object

module.exports = burger;
