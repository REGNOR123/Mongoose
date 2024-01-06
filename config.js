const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost', 
    password: 'abcd', // Replace with your actual password
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    }
});
module.exports = connection;