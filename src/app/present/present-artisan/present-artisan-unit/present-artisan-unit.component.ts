import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-present-artisan-unit',
  templateUrl: './present-artisan-unit.component.html',
  styleUrls: ['./present-artisan-unit.component.css']
})
export class PresentArtisanUnitComponent {
  @Input() photoCouverture:String = "assets/uploaded/art-1.jpg"
  @Input() photoProfil:String = "assets/uploaded/art-1.jpg"
  @Input() username:String = "Henry Cave"
  @Input() competence:String = "Spark-X"
  @Input() description:String = "Courageux fin et fort, je suis. engagez moi la NASA"
}
