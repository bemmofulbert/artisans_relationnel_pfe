const Projet = require("../models/Projet")
const Api = require("./Api")

class ProjetApi extends Api {
    static router = Api.router

    get_projet_from_client = (req, res) =>{
        Projet.read_all(
            (data)=>{
                res.jsonp(data)
                res.end() 
            },
            (error)=>{console.log(error);res.end()},
            ["Client"],
            `Client.id = Projet.ref_client and Client.id = ${req.params["clientId"]}`
        )
    }

    get_projet_from_metier = (req, res) =>{
        Projet.read_all(
            (data)=>{
                res.jsonp(data)
                res.end() 
            },
            (error)=>{console.log(error);res.end()},
            ["Metier"],
            `Metier.id = Projet.ref_metier and Metier.id = ${req.params["metierId"]}`
        )
    }

    constructor(){
        super(Projet)
        ProjetApi.router.get("/"+this.model.tableName+"/Client/:clientId", this.get_projet_from_client)
        ProjetApi.router.get("/"+this.model.tableName+"/Metier/:metierId", this.get_projet_from_metier)
    }
}
new ProjetApi()