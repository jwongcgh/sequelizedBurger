/* setup connection to database */

// dependencies
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: ", err.stack);
        return;
    }
    console.log("connected as id: ", connection.threadId);
});

// Export connection to ORM
module.exports = connection;
