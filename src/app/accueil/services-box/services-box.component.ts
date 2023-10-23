import { Component } from '@angular/core';
import { ItemMinImageTextComponent } from './item-min-image-text/item-min-image-text.component';
import { MetierService } from '../../services/Metier.service'
import { MetierModel } from '../../services/models/metier.model';

@Component({
  selector: 'app-services-box',
  templateUrl: './services-box.component.html',
  styleUrls: ['./services-box.component.css']
})
export class ServicesBoxComponent {
  metiers = []

  constructor(private metierService:MetierService) {
    metierService.getAll(
      (datas)=>{
        datas.forEach(element => {
          this.metiers.push(MetierModel.data_to_model(element));
        });
    })
  }
}
