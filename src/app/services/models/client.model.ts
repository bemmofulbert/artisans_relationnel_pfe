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
  }