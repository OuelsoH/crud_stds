// const { response } = require("express");
const { readAllStudents, readStudentById } = require("../models/students.model");

const getAllStudents = (req, res) => {
  readAllStudents((err, result) => {
    if (err) {
      console.log(err);
    } else if (result) {
      res.json(result);
      // res.status(200).json(response(200, "well getted", result))
      // const resul = result;
      // console.log(resul)
      // console.log("we have response")
      // res.send("get students")
      // res.end()
    }
    // res.json(result)
    // res.end()
  });

  // res.send("get students")

  // res.send("yes")
  // console.log(result)
};


const getStudentById = (req, res) => {
    const {id} = req.params;
    readStudentById(id,(err, result) => {
      if (err) {
        console.log(err);
      } else if (result) {
        res.json(result);
        // res.status(200).json(response(200, "well getted", result))
        // const resul = result;
        // console.log(resul)
        // console.log("we have response")
        // res.send("get students")
        // res.end()
      }
      // res.json(result)
      // res.end()
    });
  
    // res.send("get students")
  
    // res.send("yes")
    // console.log(result)
  };
  
  




module.exports = {
  getAllStudents,
  getStudentById
};
