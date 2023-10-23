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
        this.http.get(`/${this.tableName}/${idart}/client`)
            .then(res => {
                _callback(res.data)
            })
            .catch(error => {console.log(error)})
    }

    getMetiers(artisan:ArtisanModel, _callback=(data=[])=>{}){
        let idart = artisan.idart || artisan['idart']
        this.http.get(`/${this.tableName}/${idart}/Metier`)
            .then( res => {
                _callback(res.data)
            }) 
            .catch( error => {console.log(error)})
    }

    getByMetier(artisan:ArtisanModel,nomMetier, _callback=(data=[])=>{}){
        let idart = artisan.idart || artisan['idart']
        this.http.get(`/${this.tableName}/Metier/${nomMetier}`)
            .then( res => {
                _callback(res.data)
            }) 
            .catch( error => {console.log(error)})
    }

    putRealisations(artisan, _callback=(data)=>{}) {
        let idart = artisan.idart || artisan['idart']
        this.http.put(`/${this.tableName}/${idart}/realisations`,{"realisations" : artisan.realisations})
            .then( res => {
                _callback(res.data)
            })
            .catch( error => {console.log(error)})

    }
}
