import { Component } from '@angular/core';
import { GlobalConfig } from '../../config.global';

@Component({
  selector: 'app-nos-resultats',
  templateUrl: './nos-resultats.component.html',
  styleUrls: ['./nos-resultats.component.css']
})
export class NosResultatsComponent {
	Configs:any = GlobalConfig;
}
