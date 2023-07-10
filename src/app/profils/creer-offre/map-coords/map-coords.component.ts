import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalConfig } from '../../../config.global'

import {Map, View,Feature} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { apply } from 'ol-mapbox-style';
import LayerGroup from 'ol/layer/Group';
import { toLonLat,fromLonLat,transform, Projection } from 'ol/proj'
import { PointMap } from './Point.js'
import olPopup from 'ol-popup';
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { geocode,reverseGeocode } from "@esri/arcgis-rest-geocoding";
import VectorLayer from "ol/layer/Vector";
import GeoJSONFeature from "ol/format/GeoJSON"
import VectorSource from "ol/source/Vector";
import { Circle, Style,Fill,Text,Stroke } from "ol/style";
import { FullScreen, defaults as defaultControls} from 'ol/control';

const geojson = new GeoJSONFeature({
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857"
});

const baseUrl = "https://basemaps-api.arcgis.com/arcgis/rest/services/styles";
const url = (name) => `${baseUrl}/${name}?type=style&token=${GlobalConfig.ARCGIS_API_KEY}`;

@Component({
  selector: 'app-map-coords',
  templateUrl: './map-coords.component.html',
  styleUrls: ['./map-coords.component.css']
})
export class MapCoordsComponent {
  map:Map
  popup
  pointSelLayer
  areaLayer

	ngOnInit(){
    this.map = new Map({
      target: 'map',
      controls: defaultControls().extend([new FullScreen()]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 6
      })
    });

    this.popup = new olPopup({
      element: document.getElementById("ol-popup"),
      autoPan: true
    }); 
    this.map.addOverlay(this.popup);

    //Reverse Geocoding
    this.map.on("click", (e) => {

      const coords = transform(e.coordinate, "EPSG:3857", "EPSG:4326");
      this.reverseGeocodeNow(e.coordinate,coords)
    })
    this.goToSpecificPosition()
    

    // Reactivite rien de plus
    this.map.on('moveend', this.react_input);

    this.map.on("click",this.getPosProjet)
    this.setBasemap("ArcGIS:Streets")

 }
 react_input= ()=>{
    var newZoom = this.map.getView().getZoom();
    if (this.zoom != newZoom) {
      this.zoom = newZoom
    }

    // var newCoords = transform(this.map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
    // var newLon = newCoords[0]
    // var newLat = newCoords[1]
    // if (this.lon != newLon) {
    //   this.lon = newLon
    // }
    // if (this.lat != newLat) {
    //   this.lat = newLat
    // }
 }
 reverseGeocodeNow = (coordinate,coords) =>{
  const authentication = ApiKeyManager.fromKey(GlobalConfig.ARCGIS_API_KEY);
  reverseGeocode(coords, {
    authentication
  })
  .then((result:any) => {
    const message =
      `${result.address.LongLabel}<br>` + `${result.location.x.toLocaleString()}, ${result.location.y.toLocaleString()}`;

    this.popup.show(coordinate, message);
  })
  .catch((error) => {
    this.popup.hide();
    console.error(error);
  });
  }

  lon:any = 0
  lat:any = 0
  zoom = 6
  @Output() getPosPJEvent:EventEmitter<any> = new EventEmitter()

  goToSpecificPosition = ()=>{
    if( this.lon!=null && this.lat!=null && this.zoom!=null ){
      const size = this.map.getSize();
      //map.getView().setCenter(fromLonLat([lon,lat]))
      //map.getView().setZoom(zoom)
      this.map.getView().animateInternal({
        center:fromLonLat([this.lon,this.lat]),
        zoom: this.zoom
      })


      const authentication = ApiKeyManager.fromKey(GlobalConfig.ARCGIS_API_KEY);
      reverseGeocode(([this.lon,this.lat]), {
      authentication
      })
        .then((result:any) => {
          const message =
          `${result.address.LongLabel}` + `${result.location.x.toLocaleString()}, ${result.location.y.toLocaleString()}`;
      
      })
      .catch ((error)=>{
        console.log("un probleme est survenu lors de l'utilisation du reverse geocoder")
        console.log(error)
      })
    }
  }

  setBasemap = (name) => {
    this.map.setLayerGroup(new LayerGroup());
  
    apply(this.map, url(name)) //.then((this.map)=> {  })
  }

  @Input() textPointSel = "Mon Projet"
  getPosProjet = (e)=>{
    this.map.removeLayer(this.pointSelLayer)
    this.map.removeLayer(this.areaLayer)

    const coordinates = transform(e.coordinate, "EPSG:3857", "EPSG:4326");
    this.lon = coordinates[0]
    this.lat = coordinates[1]

    //Emission de l'evenement
    this.getPosPJEvent.emit([
      coordinates[0].toString(),
      coordinates[1].toString()
    ])

    //Design point de selection
    this.pointSelLayer = new VectorLayer({
      style: new Style({
        image: new Circle({
          radius: 8,
          fill: new Fill({ color: "white" }),
          stroke: new Stroke({ color: "black", width: 2 })
        }),
        text: new Text({
            font: "16px sans-serif",
            textAlign: "left",
            text: this.textPointSel,
            offsetX: 12, // bouge le texte vers la droite
            offsetY: -10, // bouge le texte vers le bas
            fill: new Fill({ color: "hsl(220, 80%, 40%)" }),
            stroke: new Stroke({ color: "white" })
          })
      })
    });

    this.areaLayer = new VectorLayer({
      style: new Style({
        stroke: new Stroke({ color: "hsl(205, 100%, 50%)", width: 4 })
      })
    });
    
    this.map.addLayer(this.pointSelLayer);
    this.map.addLayer(this.areaLayer);

    const point = {
      type: "Point",
      coordinates
    };
    this.pointSelLayer.setSource(
        new VectorSource({
            features: geojson.readFeatures(point)

        })
    );
  }

  // gotoMyPos = ()=>{
  //   if (!navigator.geolocation) {
  //       console.log('Geolocation API not supported by this browser.');
  //     } else {
  //       console.log('Checking location...');
  //       navigator.geolocation.getCurrentPosition((position)=>{
  //         //GET YOUR LOCATION
  //       let mylat = position.coords.latitude;
  //       let mylon = position.coords.longitude;

  //       //const size = this.map.getSize();
  //       this.map.getView().animateInternal({
  //         center:fromLonLat([mylon,mylat])
  //       })
  //       },
  //       ()=>{
  //         alert("Impossible d'acceder a votre position")
  //       });
  //     }
  // }

  gotoPos = (lat:number,lon:number, zoom=6) => {
    this.map.getView().animateInternal({
      center:fromLonLat([lon,lat]),
      zoom: zoom
    })
  }
}
