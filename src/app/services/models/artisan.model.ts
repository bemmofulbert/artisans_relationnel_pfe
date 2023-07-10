
export class ArtisanModel {
    static tableName = "Artisan"
    idart:string = ""
    lien_portfolio = ""
    description = ""
    localisation = ""
    realisations = []
    niveau_scolaire = ""
    diplomes = []

    static data_to_model(data){
        let model = new ArtisanModel()
        
        if (data["idart"] != undefined) model.idart = data["idart"]
        if (data["lien_portfolio"] != undefined) model.lien_portfolio = data["lien_portfolio"]
        if (data["description"] != undefined) model.description = data["description"]
        if (data["localisation"] != undefined) model.localisation = data["localisation"]
        if (data["realisations"] != undefined) model.realisations = data["realisations"]
        if (data["niveau_scolaire"] != undefined) model.niveau_scolaire = data["niveau_scolaire"]
        if (data["diplomes"] != undefined) model.diplomes = data["diplomes"]
        
        return model
      }
}