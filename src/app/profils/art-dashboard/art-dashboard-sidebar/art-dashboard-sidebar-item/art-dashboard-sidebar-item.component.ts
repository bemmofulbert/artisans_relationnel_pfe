import { Component, EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { ArtDashboardSidebarComponent } from '../art-dashboard-sidebar.component';
import { ArtDashboardSidebarItemModel } from './art-dashboard-sidebar-item.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-art-dashboard-sidebar-item',
  templateUrl: './art-dashboard-sidebar-item.component.html',
  styleUrls: ['./art-dashboard-sidebar-item.component.css']
})

@Injectable({providedIn: ArtDashboardSidebarComponent})
export class ArtDashboardSidebarItemComponent {
	@Input() public item:ArtDashboardSidebarItemModel = new ArtDashboardSidebarItemModel();
  @Output() switchTo:EventEmitter<string> = new EventEmitter()

  onClick(){
    this.switchTo.emit(this.item.title)
  }
}
