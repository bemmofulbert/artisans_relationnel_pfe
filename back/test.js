const express = require('express')
const tester = express.Router()
const path = require('path')


const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const Data = require('./src/models/Data')
const Client = require('./src/models/Client')
const { select } = require('./src/requete_generator')
const upload = multer() // for parsing multipart/form-data

tester.use(bodyParser.json()) // for parsing application/json
tester.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
tester.use(upload.array())

tester.get('/test', (req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("Ceci est une page de test<br><br>")
    let cli =Client.clone()
    cli.data["id"] = 1
    cli.hydrate(()=>{console.log(cli.clone())})
        
    res.end()
})

module.exports = tester