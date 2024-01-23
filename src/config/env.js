const path = require("path")
require("dotenv").config({path:path.resolve("./.env")})

const env = {
    port:process.env.PORT,
    hostname:process.env.HOST_NAME,
    db_host :process.env.DB_HOST,
    db_user:process.env.DB_USER,
    db_password:process.env.DB_PASSWORD,
    db_name:process.env.DB_NAME

}
console.log(process.env.DB_USER)

module.exports = env