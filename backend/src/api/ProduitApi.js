const Produit = require("../models/Produit")
const Api = require("./Api")

class ProduitApi extends Api {
    static router = Api.router
    constructor(){
        super(Produit)
    }
}
new ProduitApi()