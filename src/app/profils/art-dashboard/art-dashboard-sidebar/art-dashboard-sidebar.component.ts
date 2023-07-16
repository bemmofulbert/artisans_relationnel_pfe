import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtDashboardSidebarItemModel } from './art-dashboard-sidebar-item/art-dashboard-sidebar-item.model'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-art-dashboard-sidebar',
  templateUrl: './art-dashboard-sidebar.component.html',
  styleUrls: ['./art-dashboard-sidebar.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0 }),
            animate('0.8s ease-out', 
                    style({ width: 270 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: 270 }),
            animate('0.8s ease-in', 
                    style({ width: 0}))
          ]
        )
      ]
    )
  ]
})
export class ArtDashboardSidebarComponent {
  @Output() switchTo:EventEmitter<string> = new EventEmitter()
  @Input() sideAct = "Profils"
	items = [
		new ArtDashboardSidebarItemModel('person_pin', "Profils", true),
		new ArtDashboardSidebarItemModel('bar_chart',"Statistiques"),
		new ArtDashboardSidebarItemModel('work',"Projets"),
    new ArtDashboardSidebarItemModel('message',"Messages"),
		new ArtDashboardSidebarItemModel('help',"Aide"),
    new ArtDashboardSidebarItemModel('logout',"Log out"),
   ]
  minimized:Boolean = false

  ngOnInit(){
    this.onSwitchTo(this.sideAct)
  }
  onArrowClick(value:Boolean) {
	  this.minimized=value
   }

  onSwitchTo(value:string){
    this.switchTo.emit(value)
    this.items.forEach( item => {
      (item.title == value) ? item.selected=true : item.selected=false
    })
    
   }
}
