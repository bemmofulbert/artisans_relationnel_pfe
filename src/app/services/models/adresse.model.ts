

export class AdresseModel {
    static tableName = "Adresse"
    id: number
    pays:string ="-1"
    ville:string ="-1"
    lon:string=""
    lat:string=""

    static data_to_model(data){
        let model = new AdresseModel()
        
        if (data["id"] != undefined) model.id = data["id"]
        if (data["pays"] != undefined) model.pays = data["pays"]
        if (data["ville"] != undefined) model.ville = data["ville"]
        if (data["lon"] != undefined) model.lon = data["lon"]
        if (data["lat"] != undefined) model.lat = data["lat"]
        
        return model
      }
}