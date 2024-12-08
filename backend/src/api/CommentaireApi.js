const Commentaire = require("../models/Commentaire")
const Api = require("./Api")

class CommentaireApi extends Api {
    static router = Api.router
    constructor(){
        super(Commentaire)
    }
}
new CommentaireApi()