const info = {
    username : "postgres",
    password : "admin",
    host : "localhost",//"192.168.43.10",
    port : "5432",
    database : "oneclickwork",
    //ssl : "true"
}
const pg_promise = require('pg-promise')
const pgp = pg_promise()
const dbPhrase =  'postgres://'+info.username+":"+info.password+"@"+info.host+":"+info.port+"/"+info.database
//'postgresql://oneclickwork4300:YyOM3xILEn4u@ep-lucky-wave-650666.us-west-2.aws.neon.tech/ocw?ssl='+info.ssl
const db = pgp(dbPhrase)
console.log ("connexion a : "+ dbPhrase)


module.exports = db
