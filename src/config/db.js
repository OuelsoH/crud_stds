const mysql   = require('mysql');
const env = require("./env")


const bd = mysql.createConnection({
  host     : env.db_host,
  user     : env.db_user,
  password : env.db_password,
  database : env.db_name
});


module.exports = bd