
export class ProjetModel {
  static tableName = "Projet"
  id: number
  ref_client:number
  titre:string = ""
  description:string = ""
  int_salaire_sup: string = "500"
  int_salaire_sub: string = "100"
  nb_personnes_requis:string = "1"
  ref_localisation:number
  ref_metier:number

  static data_to_model(data){
    let model = new ProjetModel()
    
    if (data["id"] != undefined) model.id = data["id"]
    if (data["ref_client"] != undefined) model.ref_client = data["ref_client"]
    if (data["titre"] != undefined) model.titre = data["titre"]
    if (data["description"] != undefined) model.description = data["description"]
    if (data["int_salaire_sup"] != undefined) model.int_salaire_sup = data["int_salaire_sup"]
    if (data["int_salaire_sub"] != undefined) model.int_salaire_sub = data["int_salaire_sub"]
    if (data["nb_personnes_requis"] != undefined) model.nb_personnes_requis = data["nb_personnes_requis"]
    if (data["ref_localisation"] != undefined) model.ref_localisation = data["ref_localisation"]
    if (data["ref_metier"] != undefined) model.ref_metier = data["ref_metier"]
    
    return model
  }
}