const Exerce = require("../models/Exerce")
const Api = require("./Api")

class ExerceApi extends Api {
    static router = Api.router
    constructor(){
        super(Exerce)
    }
}
new ExerceApi()