import { Injectable } from '@angular/core';
import { AxiosHandler } from './Axios.service';
import {  ClientModel } from './models/client.model';
import {  ProjetModel } from './models/projet.model';


@Injectable({
    providedIn: 'root'
})
export class ProjetService extends AxiosHandler {
    model!: ProjetModel

    constructor() {
        super(ProjetModel.tableName)
    }

    getProjets_from_client(client:ClientModel, _callback=(data=[])=>{}){
        let id = client.id || client['id']
        this.http.get(`/${this.tableName}/client/${id}`)
            .then(res => {
                _callback(res.data)
            })
            .catch(error => {console.log(error)})
    }
}
