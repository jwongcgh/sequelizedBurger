// import mysql connection
var connection = require("./connection.js");

// helper functions for sql syntax @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// inserts the question marks
// argument num is the lenght of the to-be-inserted values array
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// formats the object into an array of "column = value" strings for sql syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        // hasOwnProperty check for properties created on specifically on this object
        // http://adripofjavascript.com/blog/drips/the-uses-of-in-vs-hasownproperty.html
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

// orm object @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Object for the "all" sql statement functions from burger.js
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }, // end selectAll

    // Posting into database
    create: function(tableInput, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableInput;

        queryString += " (";
        queryString += cols;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ");";

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }, // end create new record

    // Update record in database
    updateOne: function(tableInput, objColVals, condition, cb) {
        var queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    } // end updateOne
} // end orm object

module.exports = orm;
