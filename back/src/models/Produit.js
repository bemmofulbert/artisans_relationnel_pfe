const Data = require("./Data")

const Produit = new Data("Produit",
    [
        "id",
        "libelle",
        "prix",
        "description",
        "ref_vendeur",
        "dispo"
    ])

module.exports = Produit