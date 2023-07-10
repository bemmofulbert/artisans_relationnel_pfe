import { Injectable } from '@angular/core';
import { AxiosHandler } from './Axios.service';
import { MetierModel } from './models/metier.model';



@Injectable({
    providedIn: 'root'
})
export class MetierService extends AxiosHandler {
    model!: MetierModel

    constructor() {
        super(MetierModel.tableName)
    }
}
