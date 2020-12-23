const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'Mumi',
    password: '1234',
    database: 'bbdmumi',
});

//se puede securizar esto?
mysqlConnection.connect(
    
    function (err)   
 {
    if (err) {
        console.log(err)
    } else {
        console.log('dbmumi is coonect')
    }
});

mysqlConnection.end()

module.exports = mysqlConnection;

