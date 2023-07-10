import { Component, ViewChild } from '@angular/core';
import { MapCoordsComponent } from 'src/app/profils/creer-offre/map-coords/map-coords.component';

import { LineString } from 'ol/geom'

import axios from "axios"
import { transform } from 'ol/proj';
import { HeaderComponent } from 'src/app/header/header.component';
import { ClientService } from 'src/app/services/Client.service';
import { ArtisanService } from 'src/app/services/Artisan.service';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/services/models/client.model';
import { ArtisanModel } from 'src/app/services/models/artisan.model';

@Component({
  selector: 'app-art-dashboard-workspace-profils',
  templateUrl: './art-dashboard-workspace-profils.component.html',
  styleUrls: ['./art-dashboard-workspace-profils.component.css']
})
export class ArtDashboardWorkspaceProfilsComponent{
  path_defaultPp = "assets/person.svg"
  path_defaultPanorama = "assets/vignettes/panorama.svg"
  newClient:ClientModel
  newArtisan:any
  isArtisan:Boolean
  metiers = []
  dist_photo_profil
  dist_reals:any = []

  constructor(){
    this.initLocalisation();
    this.initData();
  }
  ngAfterViewInit(){
    
    this.initButEditFunction()
  }
  initData(){
    this.newClient = JSON.parse(localStorage.getItem('currentUser'));
    this.isArtisan = JSON.parse(localStorage.getItem('isArtisan'));
    console.log(this.isArtisan)
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
  initButEditFunction(){
    const edits = document.getElementsByClassName("but_edit")
    const editLocation = document.getElementById("but_edit_localisation")
    
    for(var i=0,c=edits.length; i<c; i++){
      let idEdit=edits[i].id
      edits[i].addEventListener("click",(e)=>{
        document.getElementById(idEdit).style.display="none"
        let id = String(idEdit).substring("but_edit_".length);
        this.enableAndFocus(id)
      })
    }
    editLocation.addEventListener("click", (e)=>{
      editLocation.style.display="none"
      this.enableAndFocus("paysSel")
      this.enableAndFocus("villeSel")
    })

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
    timeout : 10000,
    headers: {
      'Authorization': '*',
      'X-Api-Key':'xgNdIO8N3os2krcOEEkYtg==49zute7N7AB2Obml'}
  })

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
}
