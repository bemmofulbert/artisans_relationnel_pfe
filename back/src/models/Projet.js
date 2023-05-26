const Data = require("./Data")

const Projet = new Data("Projet",
    [
        "id",
        "ref_client",
        "titre",
        "description",
        "int_salaire_sup",
        "int_salaire_sub",
        "nb_personnes_requis",
        "localisation",
        "ref_adresse"
    ])

module.exports = Projet