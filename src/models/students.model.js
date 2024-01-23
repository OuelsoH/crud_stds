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
    }) 


}

module.exports = {
    readAllStudents
}