const Postule = require("../models/Postule")
const Api = require("./Api")

class PostuleApi extends Api {
    static router = Api.router
    constructor(){
        super(Postule)
    }
}
new PostuleApi()