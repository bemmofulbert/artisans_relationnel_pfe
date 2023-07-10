import { Injectable } from '@angular/core';
import { AxiosHandler } from './Axios.service';
import { ProjetModel } from './models/projet.model';


@Injectable({
    providedIn: 'root'
})
export class ProjetService extends AxiosHandler {
    model!: ProjetModel

    constructor() {
        super(ProjetModel.tableName)
    }
}
