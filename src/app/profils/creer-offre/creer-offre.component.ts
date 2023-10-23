import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MetierService } from '../../services/Metier.service';
import { MetierModel } from '../../services/models/metier.model';
import { MapCoordsComponent } from './map-coords/map-coords.component';

import { LinearRing } from 'ol/geom'

import axios from "axios"
import { transform } from 'ol/proj';
import { ProjetModel } from 'src/app/services/models/projet.model';
import { ClientModel } from 'src/app/services/models/client.model';
import { ProjetService } from 'src/app/services/Projet.service';
import { AdresseModel } from 'src/app/services/models/adresse.model';
import { AdresseService } from 'src/app/services/Adresse.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-creer-offre',
  templateUrl: './creer-offre.component.html',
  styleUrls: ['./creer-offre.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  height: 0, opacity: 0 }),
            animate('.6s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({  height: 300, opacity: 1 }),
            animate('.6s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class CreerOffreComponent {
  @ViewChild('header') header:HeaderComponent
  @ViewChild('mapCoords') mapCoords:MapCoordsComponent
  Projet:ProjetModel = new ProjetModel();
  Adresse:AdresseModel = new AdresseModel()
  client:ClientModel
  forms = [
    {
      title: "Donner un titre a votre offre",
      description: "Ceci permet de differencier votre offre des autres et de retrouver le meilleur prestataire",
      placeHolder: "Entrez le titre de votre offre",
      errTitle: "Minimum trois (03) caracteres",
      maxTitle:256,
      minTitle:3
    },
    {
      title: "Decriver votre projet",
      description: "Faites une description detaille de votre projet.",
      placeHolder: "Entrez la description du projet",
      errDescription: "Minimum trois (10) caracteres",
      maxCh:1024,
      minCh:10
    },
    {
      title: "Donner le salaire et le nombre de personne",
      description1: "Donner le salaire pour votre offre, il peut etre journalier, hebdomadaire ou mensuel \
        Entrer egalement le nombre de personnes necessaire a la realisation du projet",
      stitle1: "Entrer le nombre de personne",
      stitle2: "Entrer la somme a payer",
      placeHolder1: "Entrer le nombre de personne",
      placeHolder2: "Entrer le salaire"
    },
    {
      title: "Donner les competences",
      description: "Donner les competences que les prestataires devront avoir afin de realiser votre projet.",
      placeHolder: "Choisissez la competence requise"
    },
    {
      title: "Donner la localisation",
      description: "Donner le lieu ou le travail sera realise.",
      placeHolder: "Entrer la localisation",
    },
    {
      title: "Terminé !",
      description: "Verifier bien vos informations et cliquer sur publier le projet",
    },
  ]
  numOffreAct = 1
  goPhrase = "Suivant"
  metiers = []
  pathImgMetier = 'assets/vignettes/Metiers/'
  updateGoPhrase = () => {
    if (this.numOffreAct < this.forms.length) {
      this.goPhrase = "Suivant"
    }else {
      this.goPhrase = "Publier !"
    }
    //this.activatedRoute.snapshot.params['numSelected'] = this.numOffreAct
  }

//will replace " " by ''(empty)
  champsCorrects = () => {
    if (this.numOffreAct == 1) {
      if((this.Projet.titre.replace(/\s/,"")).length < this.forms[0].minTitle) return false
    }
    else if (this.numOffreAct == 2) {
      if ((this.Projet.description.replace(/\s/,'')).length < this.forms[1].minCh) return false
    }
  else if (this.numOffreAct == 4) {
    if (this.Projet.ref_metier < 0 || this.Projet.ref_metier > this.metiers.length )
      return false
  }
  else if (this.numOffreAct == 5) {
    if (this.Adresse.pays == "-1" || this.Adresse.ville == "-1")
      return false
    //if ()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           )
  }
    return true
  }

  onNext = () => {
    if (this.champsCorrects()) {
      if (this.numOffreAct < this.forms.length) this.numOffreAct++
      this.updateGoPhrase()
    }
  }

  onPrec = () => {
    if (this.numOffreAct > 1) this.numOffreAct--
    this.updateGoPhrase()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  }
  updatePage = () => {
    let numSelected = this.activatedRoute.snapshot.params['numSelected']
    if(numSelected) {
      this.numOffreAct = numSelected
    }
  }
  constructor(private metierService:MetierService, 
    private projetService:ProjetService, 
    private adresseService:AdresseService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) {
     
    this.updatePage()
    this.initMetier()
    this.updateGoPhrase()
    this.initLocalisation()
  }

  initMetier(){
    this.metierService.getAll(
      (datas)=>{
        datas.forEach(data => {
          this.metiers.push(MetierModel.data_to_model(data))
        });
    })
  }

  imgMetierSel:string=""
  onChangeMetierSel(value:string){
    if(value == "-1") return;
    this.metiers.forEach(metier =>{
      if (value == metier.id)
        this.imgMetierSel = this.pathImgMetier+metier.icon
    })
  }

  // FORMS 5
  pays = []
  villes= []
  
  //
  urlApi_Arcgis_Country = (name) => `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/countries/${name}?f=pjson`
  urlApi_Ninja_City = (name) => `https://api.api-ninjas.com/v1/city?name=${name}`
  urlApi_PostMan_Country = "https://countriesnow.space/api/v0.1/countries"

  httpNV = axios.create({
    timeout : 10000,
    headers: {
      'Authorization': '*',
      'X-Api-Key':'xgNdIO8N3os2krcOEEkYtg==49zute7N7AB2Obml'}
})

  initLocalisation(){
    axios.get(this.urlApi_PostMan_Country)
      .then((res)=>{
        this.pays = res.data.data
      })
  }

  onPaysSelChange(name){
    let payAct:any
    this.pays.forEach(pay=> {
      if (name == pay.country) payAct = pay
    })
    this.villes = payAct["cities"]
    axios.get(this.urlApi_Arcgis_Country(payAct["iso2"]))
      .then((res)=>{        
        let lo = res.data["countries"][0]["defaultExtent"]

        var p1 = transform([lo["xmin"], lo["ymin"]], 'EPSG:4326','EPSG:3857');
		    var p2 = transform([lo["xmax"], lo["ymax"]], 'EPSG:4326','EPSG:3857');

        // var py= [];
        // py.push(p1,p2)

        
        var pyGeom = new LinearRing([p1,p2]) //py[0], py[1])
        
        this.mapCoords.map.getView().fit(pyGeom.getExtent()) 
        this.mapCoords.map.getView().setZoom(5)       
      })
  }
  
  onVilleSelChange = (vil)=>{
    this.show_msg_place_error = false
    if (vil == -1) return;
    this.httpNV.get(this.urlApi_Ninja_City(vil))
      .then((data) => {this.map_gotoPos(data)})
      .catch((error)=>{console.log(error)})
  }
  map_gotoPos // Function, instancier beaucoup plus tard, elle permet d'aller a la position donnee par l'api
  show_msg_place_error = false
  ngAfterContentInit(){
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    this.map_gotoPos = (res) => {
      document.getElementById('text_location').scrollIntoView()
      if (res.data == null || res.data.length <=0) {
        this.show_msg_place_error = true
        return
      }
      
      this.mapCoords.gotoPos(res.data[0]["latitude"], res.data[0]["longitude"], 11)
    }
    
  }
  getLonLat(value){
    console.log(value)
    this.Adresse.lon = value[0]
    this.Adresse.lat = value[1]
  }
  publier = ()=>{
    if(!this.header.logged) this.router.navigate(['/connexion']);
    this.Projet.ref_client = this.client.id;

    this.adresseService.create(this.Adresse,
      (data)=>{
        console.log(data)
        this.Projet.ref_localisation=data["id"]
        let clientId = this.header.client.id
        this.Projet.ref_localisation = clientId
        this.projetService.create(this.Projet,
          (data)=>{
            this.router.navigate(['/artisanDashboard/Projets'])
          })
      }
      )
  }
}
