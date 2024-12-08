const Data = require("../bd/Data")

const Adresse = new Data("Adresse",
    [
        "id",
        "pays",
        "ville",
        "adresse",
        "lon",
        "lat"
    ])

module.exports = Adresse