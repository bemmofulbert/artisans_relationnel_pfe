import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-art-dashboard-workspace-projet-list-item',
  templateUrl: './art-dashboard-workspace-projet-list-item.component.html',
  styleUrls: ['./art-dashboard-workspace-projet-list-item.component.css'],
  animations: [
    trigger(
      'closeOpenAnim', 
      [
        state('closed',style({
          maxHeight: 76
        })),
        state('open',style({
          maxHeight: 400
        })),
        state('rotated',style({
          transform: "rotate(180deg)"
        })),
        transition(
          'closed <=> open', 
          [ animate('0.5s 0s ease-in-out') ]
        ),
        transition(
          'rotated <=> void', 
          [ animate('0.3s 0s ease-in-out') ]
        ),
      ]
    )
  ]
})
export class ArtDashboardWorkspaceProjetListItemComponent {
  closed:Boolean = true
  onArrow(){
    this.closed=!this.closed
  }
}
