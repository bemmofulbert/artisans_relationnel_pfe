const Data = require("../bd/Data")

const Commentaire = new Data("Commentaire",
    [
        "id",
        "ref_commentateur",
        "ref_commente",
        "text"
    ])

module.exports = Commentaire