import { Component } from '@angular/core';
import { ClientModel } from '../services/models/client.model'
import { ClientService } from '../services/Client.service'
import { ArtisanModel } from '../services/models/artisan.model';
import { Router } from '@angular/router';
import { MetierModel } from '../services/models/metier.model';
import { ArtisanService } from '../services/Artisan.service';

import { urlApi }  from 'src/app/app.axios'

/* 
* Ce composant est l'entete de la page. 
* il permet aussi d'initialiser les informations 
* sur le client et de savoir si il est connecte
*/

const urlApiPP = urlApi + "api/upload/photo_profil"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  urlApiPP =  urlApi + "photoprofils/"
  logged:Boolean = false
  isArtisan:Boolean = false
  client:ClientModel
  artisan
  metiers = []

  initConnexion() {
    // chargement Client
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    (this.client !== null && this.client !== undefined) ? this.logged = true : this.logged = false;
    }
  corrections(){
    if (this.client.photo_profil == null || this.client.photo_profil == "") this.client.photo_profil="../../assets/person.svg";
  }
  constructor(protected clientService:ClientService, protected router:Router, protected artisanService:ArtisanService){
    this.initConnexion();
    if (this.logged){
      this.chargementArtisanInfo();
      this.hydrateUser();
      this.corrections();
    }
    else router.navigate(['/connexion'])
  }

  //fais la correspondance entre le client et ses informations en temps que artisan
  chargementArtisanInfo(){
    this.clientService.getArtisan(this.client,
      (data) => {
        if(data){
          console.log(data[0])
          this.artisan = data
          localStorage.setItem("currentArtisan",JSON.stringify(this.artisan))
          this.isArtisan = true
          localStorage.setItem("isArtisan",JSON.stringify(this.isArtisan))

          this.chargementMetierInfo()
        }else{
          this.isArtisan = false
          localStorage.setItem("isArtisan",JSON.stringify(this.isArtisan))
        }
      })
  }
  chargementMetierInfo(){
    this.artisanService.getMetiers(this.artisan,
      (data)=>{
      this.metiers = data
      localStorage.setItem("metiers",JSON.stringify(this.metiers))
    })
  }
  // Actualise les informations sur le client actuelle
  hydrateUser(){
    this.clientService.hydrate(this.client)
  }
}
