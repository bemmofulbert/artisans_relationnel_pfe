const info = {
    username : "postgres",
    password : "admin",
    host : "localhost",//"192.168.43.10",
    port : "5432",
    database : "owc"
}
const pg_promise = require('pg-promise')
const pgp = pg_promise()
const dbPhrase = 'postgresql://oneclickwork4300:YyOM3xILEn4u@ep-lucky-wave-650666.us-west-2.aws.neon.tech/ocw' //'postgres://'+info.username+":"+info.password+"@"+info.host+":"+info.port+"/"+info.database
const db = pgp(dbPhrase)
console.log ("connexion a : "+ dbPhrase)


module.exports = db
