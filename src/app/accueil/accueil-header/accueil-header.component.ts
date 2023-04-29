import { Component } from '@angular/core';
import { GlobalConfig } from '../../config.global'

@Component({
  selector: 'app-accueil-header',
  templateUrl: './accueil-header.component.html',
  styleUrls: ['./accueil-header.component.css']
})
export class AccueilHeaderComponent {
	Configs:any = GlobalConfig;
}
