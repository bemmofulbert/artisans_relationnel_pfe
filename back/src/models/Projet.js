const Data = require("../bd/Data")

const Projet = new Data("Projet",
    [
        "id",
        "ref_client",
        "titre",
        "description",
        "int_salaire_sup",
        "int_salaire_sub",
        "nb_personnes_requis",
        "ref_localisation",
        "ref_metier"
    ])

module.exports = Projet