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

    get_metiers_of_artisan = (req, res) => {
        Artisan.read_all(
            (data)=>{
                res.jsonp(data)
                res.end() 
            },
            (error)=>{console.log(error);res.end()},
            ["Metier","Exerce"],
            "Metier.id = Exerce.ref_metier and Artisan.idart = Exerce.ref_artisan and Metier.nom="+req.params.nom
        )
    }

    get_artisan_from_metier = (req, res) =>{
        Artisan.read_all(
            (data)=>{
                res.jsonp(data)
                res.end() 
            },
            (error)=>{console.log(error);res.end()},
            ["Metier","Exerce"],
            "Metier.id = Exerce.ref_metier and Artisan.idart = Exerce.ref_artisan and Metier.nom="+req.params.nom
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
	
	updateRealisations = (req, res) => {
		Artisan.updateArray(
			(data)=>{
				res.jsonp(data)
                res.end() 
			},
			(error)=>{console.log(error);res.end()},
			req.params["id"],
			'realisations',
			req.body["realisations"]
		)
	}
	
    constructor(){
        super(Artisan)
        ArtisanApi.router.get("/"+this.model.tableName+"/:idArt/Client/", this.get_client_from_artisan)
        ArtisanApi.router.get("/" + this.model.tableName + "/Metier/:nom", this.get_artisan_from_metier)
        ArtisanApi.router.get("/"+this.model.tableName+"/:idArt/Adresse/", this.get_adresse_from_artisan)
        ArtisanApi.router.put("/"+this.model.tableName+"/:idArt/realisations/", this.updateRealisations)
    }
}
new ArtisanApi()
