const express = require("express")
const env = require("./config/env")
const app = express()
const bd = require("./config/db");
// const {readAllStudents} = require ("./models/students.model.js")
const { getAllStudents } = require("./controllers/students.controller");
const morgan = require("morgan");
const router = require("./routes/students.route")

 
bd.connect((err) =>{
  if (err) {
    console.error('erreur lors de la connection a la base de donnees: ' + err.stack);
    return;
  }
 
  console.log('connected to the DATABASE, thread id : ' + bd.threadId);
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"))

// app.get("/", getAllStudents)
// app.use(express.urlencoded({ extended: false }));

app.use("/api/students/", router);
// app.use((req, res) => {
//   res.status(404).json("Not found");
// });
app.get("/", (req,res)=>{
 bd.query("SELECT * FROM `student`;", function(err, rows){
  if(err){
    throw err
  }else{
    // res.setHeader('Content-Type', 'application/json');
    // res.status(200).json(rows);
  }
 })
        
        
       

   
  // res.send("getted")
})






app.listen(env.port, env.hostname, ()=>{
    
    console.log(`listenning at http://${env.hostname}:${env.port}`)
    // console.log(env.port)
    // console.log(env.hostname)

})