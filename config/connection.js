// Inside the connection.js file, setup the code to connect Node to MySQL.

// Export the connection
// require('dotenv').config();

var mysql = require('mysql');

// heroku database
// if (process.env.HEROKU_DB) { 
// connection = mysql.createConnection(process.env.HEROKU_DB);
// } else {

// running on localhost
connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "PASS",
    database: 'burger_db'
});


connection.connect(function (err) {
    if (err) {
        console.log('MySQL error: ', err);
        return;
    }
    console.log('Connected to MySQL database as id: ', connection.threadId, "\n\n");
});

module.exports = connection;