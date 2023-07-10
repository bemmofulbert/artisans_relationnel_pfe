const express = require('express')
const app = express()
const path = require('path')
const Api = require('./src/api/Api')

require('./src/api/ClientApi')
require('./src/api/ArtisanApi')
require('./src/api/AdresseApi')
require('./src/api/CommentaireApi')
require('./src/api/ConcerneApi')
require('./src/api/ContratApi')
require('./src/api/ExerceApi')
require('./src/api/JaimeApi')
require('./src/api/MetierApi')
require('./src/api/PaiementApi')
require('./src/api/PostuleApi')
require('./src/api/ProduitApi')
require('./src/api/ProjetApi')

//const question = require('./src/question/question')
const tester = require('./test')

//bd db
//const db = require('./bd_con') 

app.use(express.json())


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,X-Token-Auth,Authorization,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//app.use(tester)
app.use(Api.router)
app.get('/', (req,res) => {
    //res.send("hello World")
    res.sendFile(path.join(__dirname + "/index.html"))
    res.end()
} )

app.post('/id',(req,res) => {
    res.send(req.body);
    res.end()
})



app.listen(process.env.PORT || 3000, console.log("app is running on http://localhost:3000/"))
