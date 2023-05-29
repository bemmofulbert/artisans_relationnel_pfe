import { Component, Input } from '@angular/core';

@Component({
  selector: 'artisan-unit',
  standalone: true,
  templateUrl: './artisan-unit.component.html',
  styleUrls: ['./artisan-unit.component.css']
})
export class ArtisanUnitComponent {
  @Input() photoCouverture:String = "assets/uploaded/art-1.jpg"
  @Input() photoProfil:String = "assets/uploaded/art-1.jpg"
  @Input() username:String = "Henry Cave"
  @Input() competence:String = "Spark-X"
  @Input() description:String = "Courageux fin et fort, je suis. engagez moi la NASA"
}
