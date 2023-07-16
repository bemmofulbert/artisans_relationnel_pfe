import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { ExerceModel } from './models/exerce.model'

@Injectable({
    providedIn: 'root'
})
export class ExerceService extends AxiosHandler{
  model!:ExerceModel
  constructor() {
    super(ExerceModel.tableName)
    }
}
