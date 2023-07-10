const Data = require("../bd/Data")

const Postule = new Data("Postule",
    [
        "id",
        "ref_projet",
        "ref_artisan"
    ])

module.exports = Postule