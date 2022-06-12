const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "prachiDeep@12",
//   database: "assignment"
// });
// //database name to be mentioned eg : database: "assignment"
// const getConnection=()=>{
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   //write query in con.query eg SELECT * FROM student"
//   // result stored the returned data from database

  
// //   con.query("SELECT * FROM student", function (err, result, fields) {
// //     if (err) throw err;
// //     console.log(result);
// // });
//     con.query("SELECT name, sex FROM student WHERE sex = 'f'", function (err, result1) {
//         if (err) throw err;
//         console.log(result1);
// });
// });}


// app.get('/', function (req, res) {
//   res.json({val: 'Hello World'})
// });

  

// app.listen(3001)
// to execute save and rite node filename.js
//FOR REFERENCE https://www.w3schools.com/nodejs/nodejs_mysql_select.asp


