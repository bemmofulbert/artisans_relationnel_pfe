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

    constructor(){
        super(Projet)
        ProjetApi.router.get("/"+this.model.tableName+"/Client/:clientId", this.get_projet_from_client)
    }
}
new ProjetApi()