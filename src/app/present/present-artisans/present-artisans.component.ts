import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisanModel } from 'src/app/services/models/artisan.model';
import { ArtisanService } from 'src/app/services/Artisan.service'

@Component({
  selector: 'app-present-artisans',
  templateUrl: './present-artisans.component.html',
  styleUrls: ['./present-artisans.component.css']
})
export class PresentArtisansComponent {
  datas:any = []
  artisanModel:ArtisanModel
  keyword:string =""
  champs:any = [
    "description",
    "niveau_scolaire"
  ]


  constructor(private router:Router, private activatedRoute: ActivatedRoute,private artisanService:ArtisanService, private changeDetection:ChangeDetectorRef){
    
    this.keyword = activatedRoute.snapshot.params['keyword']
    //this.init()
    //this.artisanService.search()
  }
  ngAfterViewInit(){
    this.changeDetection.detectChanges
  }
  
}
