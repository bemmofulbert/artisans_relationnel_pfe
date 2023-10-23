import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-art-dashboard-workspace-projet-select',
  templateUrl: './art-dashboard-workspace-projet-select.component.html',
  styleUrls: ['./art-dashboard-workspace-projet-select.component.css']
})
export class ArtDashboardWorkspaceProjetSelectComponent {
  styleInit = "selectorSign";
  styleSelected = "selectedSign";
  optAct = 1;
  @Input() nbrData =[];
  @Input() nbr1 = 0
  @Input() nbr2 = 0
	
  options = [
    {
      title: "Mes Projets",
      number: this.nbr1,
      img: "../../../../../../assets/person.svg",
    },
    {
      title: "Tous les projets",
      number: this.nbr2,
      img: "../../../../../../assets/vignettes/eye.svg",
    },
    {
      title: "Projets en cours",
      number: this.nbrData[2],
      img: "../../../../../../assets/vignettes/loading.svg",
    },
    {
      title: "Projets Termines",
      number: this.nbrData[3],
      img: "../../../../../../assets/vignettes/checked.svg",
    }
  ]
  
  	ngAfterViewInit(){
  		this.options = [
    {
      title: "Mes Projets",
      number: this.nbr1,
      img: "../../../../../../assets/person.svg",
    },
    {
      title: "Tous les projets",
      number: this.nbr2,
      img: "../../../../../../assets/vignettes/eye.svg",
    },
    {
      title: "Projets en cours",
      number: this.nbrData[2],
      img: "../../../../../../assets/vignettes/loading.svg",
    },
    {
      title: "Projets Termines",
      number: this.nbrData[3],
      img: "../../../../../../assets/vignettes/checked.svg",
    }
  ]
  	}
  
  stylePpro(i:number){
    let stylePpro:string
    (i < this.options.length-1) ?  stylePpro="border-right: 1px gray solid" : stylePpro="";
    return stylePpro
  }
}
