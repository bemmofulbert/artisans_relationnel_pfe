import { Injectable } from '@angular/core';
import { ArtisanService } from './Artisan.service';
import { ClientService } from './Client.service';
import { ArtisanModel } from './models/artisan.model';
import { ClientModel } from './models/client.model';
import { ProjetService } from './Projet.service';



@Injectable({
    providedIn: 'root'
})
export class UserService {
  logged:Boolean = false
  isArtisan:Boolean = false
  client:ClientModel
  artisan:ArtisanModel
  oldProjet = 0
  newProjet = 0
  diffProjet = 0
  metiers = []

  getClient() {
    // chargement Client
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.hydrateUser();
    (this.client !== null && this.client !== undefined) ? this.logged = true : this.logged = false;
    localStorage.setItem('currentUser',JSON.stringify(this.client));
    return this.client;
  }


  constructor(protected clientService:ClientService,
  	protected artisanService:ArtisanService, protected projetService:ProjetService){
    this.getClient();
    if (this.logged){
      this.getArtisanInfo();
      this.getNbrProjetEnCours();
    }
  }

  //fais la correspondance entre le client et ses informations en temps que artisan
  getArtisanInfo(){
    return new Promise((_success, _failure=()=>{console.log("Error: getArtisanInfo() --> User.service.ts")})=>{
      if (this.logged){
        this.clientService.getArtisan(this.client,
          (data) => {
            if(data){
              console.log(data[0])
              this.artisan = ArtisanModel.data_to_model(data)
              localStorage.setItem("currentArtisan",JSON.stringify(this.artisan));
              this.isArtisan = true
              localStorage.setItem("isArtisan",JSON.stringify(this.isArtisan));
              this.getMetierInfo(_success);
              this.getNbrProjetEnCours();
              
            }else{
              this.isArtisan = false
              localStorage.setItem("isArtisan",JSON.stringify(this.isArtisan))
              _failure();
            }
          })
      } else _failure();
    })
  }
   // Actualise les informations sur le client actuelle
  hydrateUser(){
    this.clientService.hydrate(this.client)
  }
  private getMetierInfo(_success){
      
      if (this.isArtisan){

        this.artisanService.getMetiers(this.artisan,
          (data)=>{
          this.metiers = data
          localStorage.setItem("metiers",JSON.stringify(this.metiers))
          _success(this.artisan, this.metiers);
        })
      }
  }
  getNbrProjetEnCours(){
  	this.oldProjet = JSON.parse(localStorage.getItem("nbrProjet"));
  	this.projetService.getCount((data)=>{
  		this.newProjet = data;
  		this.diffProjet = this.newProjet - this.oldProjet;
  	})
  }
  refreshInfo = (_callback, _fail=()=>{console.log("Error: refreshInfo() --> User.service.ts")})=>{
      this.getClient()
      this.getArtisanInfo()
        .then(_callback)
        .catch(_fail)
  }
}