const Contrat = require("../models/Contrat")
const Api = require("./Api")

class ContratApi extends Api {
    static router = Api.router
    constructor(){
        super(Contrat)
    }
}
new ContratApi()