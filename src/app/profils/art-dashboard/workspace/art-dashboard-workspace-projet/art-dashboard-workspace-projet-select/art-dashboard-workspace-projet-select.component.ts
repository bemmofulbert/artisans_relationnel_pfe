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
      title: "Projets en cours",
      number: "3",
      img: "../../../../../../assets/logo.png",
    },
    {
      title: "Projets en cours",
      number: "3",
      img: "../../../../../../assets/logo.png",
    },
    {
      title: "Projets en cours",
      number: "3",
      img: "../../../../../../assets/logo.png",
    },
    {
      title: "Projets en cours",
      number: "3",
      img: "../../../../../../assets/logo.png",
    }
  ]
  stylePpro(i:number){
    let stylePpro:string
    (i < this.options.length-1) ?  stylePpro="border-right: 1px gray solid" : stylePpro="";
    return stylePpro
  }
}
