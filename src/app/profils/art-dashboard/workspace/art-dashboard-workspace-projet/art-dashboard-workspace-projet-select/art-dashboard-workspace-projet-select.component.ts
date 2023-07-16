import { Component } from '@angular/core';

@Component({
  selector: 'app-art-dashboard-workspace-projet-select',
  templateUrl: './art-dashboard-workspace-projet-select.component.html',
  styleUrls: ['./art-dashboard-workspace-projet-select.component.css']
})
export class ArtDashboardWorkspaceProjetSelectComponent {
  styleInit = "selectorSign"
  styleSelected = "selectedSign"

  options = [
    {
      title: "Mes Projets",
      number: "3",
      img: "../../../../../../assets/person.svg",
    },
    {
      title: "Tous les projets",
      number: "3",
      img: "../../../../../../assets/vignettes/eye.svg",
    },
    {
      title: "Projets en cours",
      number: "3",
      img: "../../../../../../assets/vignettes/loading.svg",
    },
    {
      title: "Projets Termines",
      number: "3",
      img: "../../../../../../assets/vignettes/checked.svg",
    }
  ]
  stylePpro(i:number){
    let stylePpro:string
    (i < this.options.length-1) ?  stylePpro="border-right: 1px gray solid" : stylePpro="";
    return stylePpro
  }
}
