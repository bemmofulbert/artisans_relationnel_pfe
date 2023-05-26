const Projet = require("../models/Projet")
const Api = require("./Api")

class ProjetApi extends Api {
    static router = Api.router
    constructor(){
        super(Projet)
    }
}
new ProjetApi()