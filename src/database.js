const mysql = require('mysql');

//Cadena de connexion
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'company'
});

//envia un mensaje de parte del servidor el cual avisa si esta activo
mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Db is connected');
    }
});

//trae datos de otra clase  (employees.js)
module.exports = mysqlConnection;