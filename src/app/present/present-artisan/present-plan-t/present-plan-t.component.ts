import { Component } from '@angular/core';

@Component({
  selector: 'app-present-plan-t',
  templateUrl: './present-plan-t.component.html',
  styleUrls: ['./present-plan-t.component.css']
})
export class PresentPlanTComponent {
  packages = [
    {
      pos:0,
      titre: "BASIQUE",
      prix: "10 000 fcfa",
      description:"La livraison se fera apres 3jours et le prestataire fera une verification 01 fois",
      elements:[
        "Element 1 du package",
        "Element 2 du package",
        "Element 3 du package",
      ]
    },
    {
      pos:1,
      titre: "STANDARD",
      prix: "30 000 fcfa",
      description:"La livraison se fera apres 6 jours et le prestataire fera une verification 03 fois",
      elements:[
        "Element 1 du package",
        "Element 2 du package",
        "Element 3 du package",
      ]
    },
    {
      pos:2,
      titre: "PREMIUM",
      prix: "50 000 fcfa",
      description:"La livraison se fera apres 3jours et le prestataire fera une verification 01 fois",
      elements:[
        "Element 1 du package",
        "Element 2 du package",
        "Element 3 du package",
      ]
    },
  ]
  ongletActuelle = 0
  SelectedStyle(pos:number){
    if (pos == this.ongletActuelle) return "border-bottom: 1px rgb(2, 2, 27) solid"
    else return ""
  }
}
