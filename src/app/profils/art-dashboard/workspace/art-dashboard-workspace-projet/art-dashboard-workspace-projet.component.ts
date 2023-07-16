import { Component } from '@angular/core';
import { ProjetService } from 'src/app/services/Projet.service';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-art-dashboard-workspace-projet',
  templateUrl: './art-dashboard-workspace-projet.component.html',
  styleUrls: ['./art-dashboard-workspace-projet.component.css']
})
export class ArtDashboardWorkspaceProjetComponent {
  client?:ClientModel
  projets:any = []
  constructor(protected projetService:ProjetService) {
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    projetService.getProjets_from_client(this.client,(data)=>{
      this.projets = data;
    })
  }

}
