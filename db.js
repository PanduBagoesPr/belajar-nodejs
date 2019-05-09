var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ws_foodreview"
});

// Check Connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// Create MySQL Connection 
module.exports = con