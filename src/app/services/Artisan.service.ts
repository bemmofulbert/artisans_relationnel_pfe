import { Injectable } from '@angular/core';
import { AxiosHandler } from './Axios.service';
import { ArtisanModel } from './models/artisan.model';



@Injectable({
    providedIn: 'root'
})
export class ArtisanService extends AxiosHandler {
    model!: ArtisanModel

    constructor() {
        super(ArtisanModel.tableName)
    }

    getClient(artisan:ArtisanModel, _callback=(data=[])=>{}){
        let idart = artisan.idart || artisan['idart']
        this.http.get(`/${this.tableName}/client/${idart}`)
            .then(res => {
                _callback(res.data)
            })
            .catch(error => {console.log(error)})
    }

    getMetiers(artisan:ArtisanModel, _callback=(data=[])=>{}){
        let idart = artisan.idart || artisan['idart']
        this.http.get(`/${this.tableName}/Metier/${idart}`)
            .then( res => {
                _callback(res.data)
            }) 
            .catch( error => {console.log(error)})
    }
}
