const Jaime = require("../models/Jaime")
const Api = require("./Api")

class JaimeApi extends Api {
    static router = Api.router
    constructor(){
        super(Jaime)
    }
}
new JaimeApi()