const express = require("express")
const env = require("./config/env")
const app = express()
const bd = require("./config/db")

 
bd.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + bd.threadId);
});



app.listen(env.port, env.hostname, ()=>{
    
    console.log(`listenning at http://${env.hostname}:${env.port}`)
    console.log(env.port)
    console.log(env.hostname)

})