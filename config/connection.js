// Set up MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        connection = mysql.createConnection({
        host: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "mqwhoewbihd5dag9",
        password: "p103zwzt9wzd7b8l",
        database: "tp8uac3zq6xu0ybc"
    });
};

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;