import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-dashboard',
  templateUrl: './art-dashboard.component.html',
  styleUrls: ['./art-dashboard.component.css']
})
export class ArtDashboardComponent {
  sideAct:string = "Profils"

  constructor(private activatedRoute: ActivatedRoute) {
    let sideSelected = activatedRoute.snapshot.params['sideSelected']
    if(sideSelected) {
      this.sideAct = sideSelected
    }
  }

  onSideBar_change(value:string) {
    this.sideAct = value
  }
}
