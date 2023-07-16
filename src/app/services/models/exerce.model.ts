

export class ExerceModel {
    static tableName = "Exerce"
    id: number
    ref_artisan:number
    ref_metier:number

    static data_to_model(data){
        let model = new ExerceModel()
        
        if (data["id"] != undefined) model.id = data["id"]
        if (data["ref_artisan"] != undefined) model.ref_artisan = data["ref_artisan"]
        if (data["ref_metier"] != undefined) model.ref_metier = data["ref_metier"]
        
        return model
      }
}