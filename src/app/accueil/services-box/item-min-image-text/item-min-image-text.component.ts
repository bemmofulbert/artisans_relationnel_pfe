import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-item-min-image-text',
  templateUrl: './item-min-image-text.component.html',
  styleUrls: ['./item-min-image-text.component.css']
})
export class ItemMinImageTextComponent {
  @Input() metier = "Construction";
  @Input() imgPath = "assets/vignettes/construction.svg";
  @Input() lien = "#";
}
