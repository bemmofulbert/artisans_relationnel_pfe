const Data = require("../bd/Data")

const Concerne = new Data("Concerne",
    [
        "id",
        "ref_projet",
        "ref_metier"
    ])

module.exports = Concerne