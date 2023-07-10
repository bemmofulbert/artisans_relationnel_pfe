import { NumberSymbol } from "@angular/common"

export class MetierModel {
    static tableName = "Metier"
    id: number=-1
    nom:string
    icon:string
    largeicon:string
    questions= []

    static data_to_model(data){
        let model = new MetierModel()
        
        if (data["id"] != undefined) model.id = data["id"]
        if (data["nom"] != undefined) model.nom = data["nom"]
        if (data["icon"] != undefined) model.icon = data["icon"]
        if (data["largeicon"] != undefined) model.largeicon = data["largeicon"]
        if (data["questions"] != undefined) model.questions = data["questions"]
        
        return model
      }
}