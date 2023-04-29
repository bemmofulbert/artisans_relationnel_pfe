import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css','../profils.css'],
})
export class ConnexionComponent {
  show = true;
  mail!:String;
  pass!:String;  
}
