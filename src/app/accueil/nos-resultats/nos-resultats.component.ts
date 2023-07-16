import { Component } from '@angular/core';
import { GlobalConfig } from '../../config.global';
import { ClientService } from 'src/app/services/Client.service';
import { ArtisanService } from 'src/app/services/Artisan.service';
import { ProjetService } from 'src/app/services/Projet.service';

@Component({
  selector: 'app-nos-resultats',
  templateUrl: './nos-resultats.component.html',
  styleUrls: ['./nos-resultats.component.css']
})
export class NosResultatsComponent {
	Configs:any = GlobalConfig;
  nbrArtisan:number = 120
  nbrProjet:number = 250
  nbrClient:number = 210

  constructor(protected clientService:ClientService,
    protected artisanService:ArtisanService,
    protected projetService:ProjetService) {

    artisanService.getCount(
      (nbr)=>{this.nbrArtisan = nbr}
    )
    clientService.getCount(
      (nbr)=>{this.nbrClient = nbr}
    )
    projetService.getCount(
      (nbr)=>{this.nbrProjet = nbr}
    )
    }
}
