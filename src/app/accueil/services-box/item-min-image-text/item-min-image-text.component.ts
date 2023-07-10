import { Component,Input } from '@angular/core';
import { MetierModel } from '../../../services/models/metier.model'

@Component({
  selector: 'app-item-min-image-text',
  templateUrl: './item-min-image-text.component.html',
  styleUrls: ['./item-min-image-text.component.css']
})
export class ItemMinImageTextComponent {
  path = 'assets/vignettes/Metiers/'
  @Input() metier!:MetierModel;
  // @Input() imgPath = "assets/vignettes/construction.svg";
  // @Input() lien = "#";
  constructor(){
    
  }
}
