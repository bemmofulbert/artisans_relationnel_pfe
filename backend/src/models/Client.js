const Data = require("../bd/Data")

const Client = new Data("Client",
    [
        'id',
        'nom',
        'prenom',
        'mail',
        'telephone1',
        'telephone2',
        'photo_profil',
        'motdepasse',
        'ref_adresse',

        'activated',
        'code',
        'date_amission'
    ])

module.exports = Client