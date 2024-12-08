const Data = require("../bd/Data")

const Contrat = new Data("Contrat",
    [
        "id",
        "date_start",
        "date_fin",
        "ref_offre",
        "note_client",
        "note_artisan"
    ])

module.exports = Contrat