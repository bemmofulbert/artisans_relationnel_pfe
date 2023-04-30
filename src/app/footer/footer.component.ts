import { Component } from '@angular/core';
import { GlobalConfig } from '../config.global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Configs:any = GlobalConfig;
}
