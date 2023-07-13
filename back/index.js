const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const bodyParser = require('body-parser')

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

//app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,X-Token-Auth,Authorization,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const pathPP = './datas/photoProfils'
// Fichiers -- datas
app.use('/photoprofils', express.static(pathPP));

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,pathPP)
    },
    filename:(req, file,cb)=> {
        console.log(file)
        cb(null, file.originalname)
    }
})
let upload = multer({storage:storage})

//route upload
app.post('/api/upload/photo_profil', upload.single("PP"),function(req,res){
    console.log(req.file)
    if(!req.file) {
        console.log("no file received");
        return res.send({
            sucess: false
        });
    }else {
        console.log('file received');
        return res.send({
            success: true
        })
    }
})




//Toutes les routes de l'application
app.use(Api.router)


const port = process.env.PORT || 3000
app.listen(port, console.log("app is running on port "+port))
