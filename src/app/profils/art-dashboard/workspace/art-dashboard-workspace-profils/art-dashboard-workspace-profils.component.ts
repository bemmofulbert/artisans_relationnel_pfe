import { Component, ViewChild } from '@angular/core';
import { MapCoordsComponent } from 'src/app/profils/creer-offre/map-coords/map-coords.component';


import { LineString } from 'ol/geom'

import axios from "axios"
import { transform } from 'ol/proj';
import { ClientModel } from 'src/app/services/models/client.model';
import { ArtisanModel } from 'src/app/services/models/artisan.model';
import { MetierModel } from 'src/app/services/models/metier.model';
import { ExerceModel } from 'src/app/services/models/exerce.model';
import { AdresseModel } from 'src/app/services/models/adresse.model';

import  http, { urlApi }  from 'src/app/app.axios'
import { FileUploader } from 'ng2-file-upload';
import { ClientService } from 'src/app/services/Client.service';
import { ArtisanService } from 'src/app/services/Artisan.service';
import { ExerceService } from 'src/app/services/Exerce.service';
import { AdresseService } from 'src/app/services/Adresse.service';
import { MetierService } from 'src/app/services/Metier.service';
const urlApiPP = urlApi + "api/upload/photo_profil";
const urlApiReals = urlApi + "api/upload/realisations";

@Component({
  selector: 'app-art-dashboard-workspace-profils',
  templateUrl: './art-dashboard-workspace-profils.component.html',
  styleUrls: ['./art-dashboard-workspace-profils.component.css']
})
export class ArtDashboardWorkspaceProfilsComponent{
  urlApi = urlApi
  path_defaultPp = "assets/person.svg"
  path_defaultPanorama = "assets/vignettes/panorama.svg"
  newClient:ClientModel
  newArtisan:any
  newAdresse:AdresseModel = new AdresseModel() 
  isArtisan:Boolean
  metiers = []
  metiersCh = [null,null,null]
  dist_photo_profil
  dist_reals:any = []
  art_new_old:Boolean

  public uploaderPP:FileUploader = new FileUploader({url: urlApiPP, itemAlias:"PP" });
  public uploaderReals:FileUploader = new FileUploader({url: urlApiReals, itemAlias:"reals" });
	
  constructor(protected clientService:ClientService, protected artisanService:ArtisanService, 
      protected exerceService:ExerceService,protected adresseService:AdresseService,
      protected metierService:MetierService){
    this.initLocalisation();
    this.initData();
  }
  ngAfterViewInit(){
    this.initButEditFunction()

    this.uploaderPP.clearQueue()
    this.uploaderReals.clearQueue()
    this.uploaderPP.onBeforeUploadItem = (fileItem: any) => {
      fileItem.formData.push( { nom: this.newClient.nom } );
      fileItem.formData.push( { id: this.newClient.id } );
    };
    this.uploaderPP.onAfterAddingFile = (file) => { file.withCredentials = false;
      file.file.name = this.newClient.id + "_" + this.newClient.nom + "." + file.file.name.split('.').pop();
      this.newClient.photo_profil = file.file.name;
    };
    this.uploaderReals.onAfterAddingFile = (file) => { file.withCredentials = false;
      file.file.name = this.newClient.id + "_" + this.newClient.nom + "." + file.file.name.split('.').pop();
      this.newArtisan.realisations = []
      this.newArtisan.realisations[0] = file.file.name;
    }
    
    this.initMetier();
  }
  initData(){
    this.newClient = JSON.parse(localStorage.getItem('currentUser'));
    this.isArtisan = JSON.parse(localStorage.getItem('isArtisan'));
    this.art_new_old = this.isArtisan;
    if(this.isArtisan == true) {
      this.newArtisan = JSON.parse(localStorage.getItem('currentArtisan'));
      this.metiers = JSON.parse(localStorage.getItem('metiers'));
    }
  }

  enableAndFocus(id){
    let results = document.querySelectorAll(`#${id}`)
        results.forEach(el => {
          (<HTMLInputElement>el).disabled = false;
          (<HTMLInputElement>el).readOnly = false;
          (<HTMLInputElement>el).focus();
        })
  }

  initButEditFunction = ()=>{
    const edits = document.getElementsByClassName("but_edit");
    const editLocation = document.getElementById("but_edit_localisation");
    
    for(var i=0,c=edits.length; i<c; i++){
      let idEdit=edits[i].id;
      edits[i].removeEventListener("click", (e)=>{
        document.getElementById(idEdit).style.display="none"
        let id = String(idEdit).substring("but_edit_".length);
        this.enableAndFocus(id)
      });
      edits[i].addEventListener("click",(e)=>{
        document.getElementById(idEdit).style.display="none"
        let id = String(idEdit).substring("but_edit_".length);
        this.enableAndFocus(id)
      });
    }

    if (editLocation == null) return;
    editLocation.removeEventListener("click", (e)=>{
      editLocation.style.display="none"
      this.enableAndFocus("paysSel")
      this.enableAndFocus("villeSel")
    });
    editLocation.addEventListener("click", (e)=>{
      editLocation.style.display="none"
      this.enableAndFocus("paysSel")
      this.enableAndFocus("villeSel")
    });

  }

  //LOCATION
  pays = []
  villes= []
  @ViewChild('mapCoords') mapCoords:MapCoordsComponent
  map_gotoPos
  show_msg_place_error = false
  
  //
  urlApi_Arcgis_Country = (name) => `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/countries/${name}?f=pjson`
  urlApi_Ninja_City = (name) => `https://api.api-ninjas.com/v1/city?name=${name}`
  urlApi_PostMan_Country = "https://countriesnow.space/api/v0.1/countries"

  httpNV = axios.create({
    timeout : 15000,
    headers: {
      'Authorization': '*',
      'X-Api-Key':'xgNdIO8N3os2krcOEEkYtg==49zute7N7AB2Obml'}
  })

  initMetier(){
    this.metierService.getAll(
      (datas)=>{
        datas.forEach(data => {
          this.metiers.push(MetierModel.data_to_model(data))
        });
    })
  }

  initLocalisation(){
    axios.get(this.urlApi_PostMan_Country)
      .then((res)=>{
        this.pays = res.data.data
        console.log(this.pays)
      })
  }

  onPaysSelChange(index){
    //console.log(index)
    this.villes = this.pays[index]["cities"]
    this.newAdresse.pays = this.pays[index].country
    axios.get(this.urlApi_Arcgis_Country(this.pays[index]["iso2"]))
      .then((res)=>{
        console.log(res)
        
        var style = {
          strokeColor: "#00FF00",
          strokeOpacity: 1,
          strokeWidth: 3,
          fillColor: "#00FF00",
          fillOpacity: 0.3
		    };
        
        let lo = res.data["countries"][0]["defaultExtent"]
        
        var p1 = transform([lo["xmin"], lo["ymin"]], 'EPSG:4326','EPSG:3857');
		    var p2 = transform([lo["xmax"], lo["ymax"]], 'EPSG:4326','EPSG:3857');

        var py= [];
        py.push(p1,p2)
        
        var pyGeom = new LineString(py[0], py[1])
        this.mapCoords.map.getView().fit(pyGeom.getExtent()) 
        this.mapCoords.map.getView().setZoom(6)       
      })
  }
  
  onVilleSelChange = (index)=>{
    this.show_msg_place_error = false
    if (index == -1) return;
    console.log(this.urlApi_Ninja_City(this.villes[index]))
    this.newAdresse.ville = this.villes[index];
    this.httpNV.get(this.urlApi_Ninja_City(this.villes[index]))
      .then((data) => {this.map_gotoPos(data)})
      .catch((error)=>{console.log(error)})
  }

  ngAfterContentInit(){
    this.map_gotoPos = (res) => {
      document.getElementById('text_location').scrollIntoView()
      if (res.data == null || res.data.length <=0) {
        this.show_msg_place_error = true
        return
      }
      this.mapCoords.gotoPos(res.data[0]["latitude"], res.data[0]["longitude"], 11)
    }
  }

  //Enregistrement
  onclickBecomeArt(){
    this.newArtisan = new ArtisanModel()
    this.newArtisan.idart = this.newClient.id

    this.isArtisan = true;
    this.initButEditFunction();
    this.initMetier();
  }

//---------------------------------------------------------------SUBMIT---
  //fais la correspondance entre le client et ses informations en temps que artisan
  chargementArtisanInfo(){
    this.clientService.getArtisan(this.newClient,
      (data) => {
        if(data){
          console.log(data[0])
          this.newArtisan = data
          localStorage.setItem("currentArtisan",JSON.stringify(this.newArtisan))
          this.isArtisan = true
          localStorage.setItem("isArtisan",JSON.stringify(this.isArtisan))

          //this.chargementMetierInfo()
        }else{
          this.isArtisan = false
          localStorage.setItem("isArtisan",JSON.stringify(this.isArtisan))
        }
      })
  }
  chargementMetierInfo(){
    this.artisanService.getMetiers(this.newArtisan,
      (data)=>{
      this.metiers = data
      localStorage.setItem("metiers",JSON.stringify(this.metiers))
    })
  }
  // Actualise les informations sur le client actuelle
  chargementClientInfo(){
    this.clientService.hydrate(this.newClient)
    localStorage.setItem("currentUser",JSON.stringify(this.newClient))
  }
  setPhoto_profil(e){
    // const img = (<HTMLImageElement>document.getElementById('img_photo'))

    // if(e.target.files[0].mozFullPath){
    //   img.src = e.target.files[0].mozFullPath
    //   console.log(img.src)
    // }
  }
  saveExerce(i:number){
    let exerce:ExerceModel = new ExerceModel();
    exerce.ref_artisan = this.newClient.id;
    exerce.ref_metier = this.metiersCh[i];

    this.exerceService.create(exerce)
  }

  isLoading:Boolean = false

  onSubmit(){
    this.uploaderPP.uploadAll()
    this.uploaderReals.uploadAll()

    this.newAdresse.lat = this.mapCoords.lat;
    this.newAdresse.lon = this.mapCoords.lon;

    this.clientService.update(this.newClient,()=>{
    	this.chargementClientInfo()
      this.isLoading = false
      const reals:any = this.newArtisan.realisations;
      this.newArtisan.realisations = null;
      if(this.isArtisan){
		  if(!this.art_new_old){
        this.adresseService.create(this.newAdresse,(data)=>{
          console.log(data);
          this.newArtisan.localisation = data["id"]
          this.artisanService.create(this.newArtisan,()=>{
            this.saveExerce(0)
            this.saveExerce(1)
            this.saveExerce(2)
            this.newArtisan.realisations = reals
            this.artisanService.putRealisations(this.newArtisan)
          })
        })
		    
		  }
		  else{
		    this.artisanService.update(this.newArtisan,()=>{
          this.saveExerce(0)
          this.saveExerce(1)
          this.saveExerce(2)
          this.newArtisan.realisations = reals;
          this.artisanService.putRealisations(this.newArtisan);
          this.newAdresse.id = this.newArtisan.localisation;
          this.adresseService.update(this.newAdresse);
		    })
		  }
		}
	 })
  }

  onSubmitClick(){
    this.isLoading = true
    document.getElementById('spinnerProfils').scrollIntoView()
  }
}
