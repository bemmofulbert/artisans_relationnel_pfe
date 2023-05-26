const Adresse = require("../models/Adresse")
const Api = require("./Api")

class AdresseApi extends Api {
    static router = Api.router
}
new AdresseApi()