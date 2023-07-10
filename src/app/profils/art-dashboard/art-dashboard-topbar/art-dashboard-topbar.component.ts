import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { ClientService } from 'src/app/services/Client.service';
import { ArtisanService } from 'src/app/services/Artisan.service';

@Component({
  selector: 'app-art-dashboard-topbar',
  templateUrl: './art-dashboard-topbar.component.html',
  styleUrls: ['./art-dashboard-topbar.component.css']
})
export class ArtDashboardTopbarComponent extends HeaderComponent{
  constructor(private clientServe:ClientService, protected routeur:Router, protected artisanServe:ArtisanService){
    super(clientServe,routeur,artisanServe)
  }
}
