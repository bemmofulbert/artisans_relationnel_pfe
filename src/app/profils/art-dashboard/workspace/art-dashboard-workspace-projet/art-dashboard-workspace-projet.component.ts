import { Component, ViewChild } from '@angular/core';
import { ProjetService } from 'src/app/services/Projet.service';
import { ClientModel } from 'src/app/services/models/client.model';
import { ArtDashboardWorkspaceProjetSelectComponent } from './art-dashboard-workspace-projet-select/art-dashboard-workspace-projet-select.component'

@Component({
  selector: 'app-art-dashboard-workspace-projet',
  templateUrl: './art-dashboard-workspace-projet.component.html',
  styleUrls: ['./art-dashboard-workspace-projet.component.css']
})
export class ArtDashboardWorkspaceProjetComponent {
  @ViewChild('selector') selector:ArtDashboardWorkspaceProjetSelectComponent
  client?:ClientModel
  projets:any = []
  projetsAll:any = []
  nbr1 = this.projets.length
  nbr2 = this.projetsAll.length
  constructor(protected projetService:ProjetService) {
    this.client = JSON.parse(localStorage.getItem('currentUser'));
    projetService.getProjets_from_client(this.client,(data)=>{
      this.projets = data;
      this.nbr1 = this.projets.length
    })
    projetService.getAll((data)=>
    {
    	this.projetsAll = data;
    	this.nbr2 = this.projetsAll.length
    })
    projetService.getCount((data)=>{
  		localStorage.setItem("nbrProjet",JSON.stringify(data));		
  	})
  }

}
