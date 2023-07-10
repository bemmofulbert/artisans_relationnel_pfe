const Artisan = require("../models/Artisan")
const Client = require("../models/Client")
const Metier = require("../models/Metier")
const Api = require("./Api")

class ArtisanApi extends Api {
    static router = Api.router
    

    get_client_from_artisan = (req, res) =>{
        Client.getUnique((data)=>{
            res.jsonp(data)
            res.end()
        },
        (error)=>{console.log(error);res.end()},
        req.params["id"])
    }

    get_metiers_from_artisan = (req, res) =>{
        Artisan.read_all(
            (data)=>{
                res.jsonp(data)
                res.end() 
            },
            ["Metier","Exerce"],
            (error)=>{console.log(error);res.end()},
            "Metier.id = Exerce.ref_metier and Artisan.idart = Exerce.ref_artisan"
        )
    }

    get_adresse_from_artisan = (req, res) =>{
        Artisan.read_all(
            (data)=>{
                res.jsonp(data)
                res.end() 
            },
            (error)=>{console.log(error);res.end()},
            ["Adresse"],
            "Adresse.id = Artisan.localisation"
        )
    }

    constructor(){
        super(Artisan)
        ArtisanApi.router.get("/"+this.model.tableName+"/Client/:id", this.get_client_from_artisan)
        ArtisanApi.router.get("/"+this.model.tableName+"/Metier/:id", this.get_metiers_from_artisan)
        ArtisanApi.router.get("/"+this.model.tableName+"/Adresse/:id", this.get_adresse_from_artisan)
    }
}
new ArtisanApi()