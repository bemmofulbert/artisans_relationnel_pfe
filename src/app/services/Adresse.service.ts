import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { AdresseModel } from './models/adresse.model'

@Injectable({
    providedIn: 'root'
})
export class AdresseService extends AxiosHandler{
  model!:AdresseModel
  constructor() {
    super(AdresseModel.tableName)
    }
}
