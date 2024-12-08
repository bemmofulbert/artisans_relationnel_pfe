const Paiement = require("../models/Paiement")
const Api = require("./Api")

class PaiementApi extends Api {
    static router = Api.router
    constructor(){
        super(Paiement)
    }
}
new PaiementApi()