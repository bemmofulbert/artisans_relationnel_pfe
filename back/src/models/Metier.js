const Data = require("../bd/Data")

const Metier = new Data("Metier",
    [
        "id",
        "nom",
        "icon",
        "largeicon",
        "questions"
    ])

module.exports = Metier