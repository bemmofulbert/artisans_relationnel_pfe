import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalConfig } from '../../config.global'
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-header',
  templateUrl: './accueil-header.component.html',
  styleUrls: ['./accueil-header.component.css']
})
export class AccueilHeaderComponent {
	Configs:any = GlobalConfig;
  keyword?:string

  @ViewChild('searchEntry') searchEntry: ElementRef
  constructor(private router:Router) { }

  onSearch = () => {
    if (this.keyword !== undefined && this.keyword !== null && this.keyword !== "")
      this.router.navigate([`artisans/keyword/${this.keyword}`])
    else this.searchEntry.nativeElement.focus()
  }
}
