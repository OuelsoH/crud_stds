const express = require('express');
const { getAllStudents } = require('../controllers/students.controller');
 const router = express.Router()


 // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
//   });
  // define the home page route
  // router.get("", ()=>{
  //   res.send("not found")
  // })
  router.get("/", getAllStudents);
  // define the about route
  router.get('/students', function(req, res) {
    res.send('Get All Students');
  });
  
  module.exports = router;