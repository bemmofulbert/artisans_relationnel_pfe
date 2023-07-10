import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { HopitalModel } from './models/hopital.model'


@Injectable({
  providedIn: 'root'
})
export class HopitalService extends AxiosHandler{
  constructor() {
    super(HopitalModel.tableName)
    
  }
}


