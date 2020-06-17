const mysql = require('mysql');


// MYSQL CONNECTION..
// var mysqlConnection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'sample'
// })

var mysqlConnection = mysql.createConnection({
    port: 3306,
    host: 'fdb24.awardspace.net',
    user: '3476658_test',
    password: 'qwerty@123',
    database: '3476658_test'
})

mysqlConnection.connect((err) => {


    if(!err){
        console.log('Db connection Successfull')
    }else{
        console.log('Db connection Error! ' + err)
    }

})

module.exports = mysqlConnection;