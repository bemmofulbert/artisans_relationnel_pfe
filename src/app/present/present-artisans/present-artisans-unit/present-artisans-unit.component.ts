import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ArtisanService } from 'src/app/services/Artisan.service';
import { AdresseModel } from 'src/app/services/models/adresse.model';
import { ArtisanModel } from 'src/app/services/models/artisan.model';
import { ClientModel } from 'src/app/services/models/client.model';
import { MetierModel } from 'src/app/services/models/metier.model';

@Component({
  selector: 'app-present-artisans-unit',
  templateUrl: './present-artisans-unit.component.html',
  styleUrls: ['./present-artisans-unit.component.css']
})
export class PresentArtisansUnitComponent {
  showUnit = true
  @Input() photoCouverture:String = "assets/uploaded/art-1.jpg"
  @Input() artisan:any
  client:any = new ClientModel()
  metier:MetierModel
  adresse:AdresseModel

  constructor(private artisanService:ArtisanService){
    
  }
  ngOnInit(){
    this.init()
  }
  init() {
    this.artisanService.getClient(this.artisan,
      (data) => {
        console.log(data)
        this.client = data
      })
  }
}
