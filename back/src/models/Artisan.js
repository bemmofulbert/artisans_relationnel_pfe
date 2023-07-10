const ArtisanData = require("../bd/ArtisanData")

const Artisan = new ArtisanData("Artisan",
    [
        'idart',
        'lien_portfolio',
        'description',
        'localisation',
        'realisations',
        'niveau_scolaire',
        'diplomes'
    ])

module.exports = Artisan