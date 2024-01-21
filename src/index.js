const express = require("express")
const env = require("./config/env")
const app = express()
const mysql   = require('mysql');


const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : "students"
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});



app.listen(env.port, env.hostname, ()=>{
    
    console.log(`listenning at http://${env.hostname}:${env.port}`)
    console.log(env.port)
    console.log(env.hostname)

})