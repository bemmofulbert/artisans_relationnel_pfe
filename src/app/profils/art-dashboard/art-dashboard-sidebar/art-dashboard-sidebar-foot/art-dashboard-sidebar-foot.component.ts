import { Component } from '@angular/core';

@Component({
  selector: 'app-art-dashboard-sidebar-foot',
  templateUrl: './art-dashboard-sidebar-foot.component.html',
  styleUrls: ['./art-dashboard-sidebar-foot.component.css']
})
export class ArtDashboardSidebarFootComponent {
  giveContact(){
    alert("bemmoFulbert@gmail.com\n+237 682 19 31 57")
  }
}
