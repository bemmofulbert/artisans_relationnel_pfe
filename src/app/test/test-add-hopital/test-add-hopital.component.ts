import { Component } from '@angular/core';
import { HopitalModel } from '../../services/models/hopital.model';
import { HopitalService } from '../../services/Hopital.service';

@Component({
  selector: 'app-test-add-hopital',
  templateUrl: './test-add-hopital.component.html',
  styleUrls: []
})
export class TestAddHopitalComponent {
	hopital:HopitalModel = new HopitalModel()
	private hopitalService:HopitalService = new HopitalService()
  nom:string
  lat:number
  lon:number
	
  submit = ()=> { 
      const nom = this.nom
      const lat = this.lat
      const lon = this.lon

      alert(nom+"-"+lat+"-"+lon)
      this.hopitalService.create(
          {"nom":nom,"lat":lat,"lon":lon}
          ,()=>{console.log("ajout OK")}
      )	
      }
}
