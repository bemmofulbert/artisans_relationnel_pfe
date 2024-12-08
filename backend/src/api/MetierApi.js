const Metier = require("../models/Metier")
const Api = require("./Api")

class MetierApi extends Api {
    static router = Api.router
    constructor(){
        super(Metier)
    }
}
new MetierApi()