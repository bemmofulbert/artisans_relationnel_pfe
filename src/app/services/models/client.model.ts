import { NumberSymbol } from "@angular/common"

export class ClientModel {
    static tableName = "Client"
    id: number
    nom:string = ""
    prenom:string = ""
    mail:string = ""
    telephone1: string = ""
    telephone2: string = ""
    photo_profil:string = ""
    motdepasse: string = ""
    ref_adresse:string = ""

    static data_to_model(data){
      let model = new ClientModel()
      
      if (data["id"] != undefined) model.id = data["id"]
      if (data["nom"] != undefined) model.nom = data["nom"]
      if (data["prenom"] != undefined) model.prenom = data["prenom"]
      if (data["mail"] != undefined) model.mail = data["mail"]
      if (data["telephone1"] != undefined) model.telephone1 = data["telephone1"]
      if (data["telephone2"] != undefined) model.telephone2 = data["telephone2"]
      if (data["photo_profil"] != undefined) model.photo_profil = data["photo_profil"]
      if (data["motdepasse"] != undefined) model.motdepasse = data["motdepasse"]
      if (data["ref_adresse"] != undefined) model.ref_adresse = data["ref_adresse"]
      
      return model
    }
  }