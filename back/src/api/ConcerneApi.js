const Concerne = require("../models/Concerne")
const Api = require("./Api")

class ConcerneApi extends Api {
    static router = Api.router
    constructor(){
        super(Concerne)
    }
}
new ConcerneApi()