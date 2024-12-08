const Data = require("../bd/Data")

const Paiement = new Data("Paiement",
    [
        "id",
        "ref_contrat",
        "date",
        "montant"
    ])

module.exports = Paiement