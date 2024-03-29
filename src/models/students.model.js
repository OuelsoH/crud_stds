const bd = require("../config/db");


const readAllStudents = (callback)=>{
    const sql = "SELECT * FROM `student`;";
    bd.query(sql, function(err, res){
       
        if(err) {
        callback(err, null)
        }else{
            // res.send("students",{data:''})
            callback(null, res)
            // res.json(res);
        }
        
        
        
       

        // bd.end();
    }) ;
}
    
    const readStudentById = (id,callback)=>{
        const sql = "SELECT * FROM `student` WHERE `id`=?;";
        bd.query(sql, [id], function(err, res){
           
            if(err) {
            callback(err, null)
            }else{
                // res.send("students",{data:''})
                callback(null, res)
                // res.json(res);
            }
            
            
            
           
    
            // bd.end();
        }) 


    }

module.exports = {
    readAllStudents,
    readStudentById
}