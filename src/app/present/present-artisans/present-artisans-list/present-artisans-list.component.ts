import { Component, Input, OnInit } from '@angular/core';
import { ArtisanService } from 'src/app/services/Artisan.service';
import { ArtisanModel } from 'src/app/services/models/artisan.model';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-present-artisans-list',
  templateUrl: './present-artisans-list.component.html',
  styleUrls: ['./present-artisans-list.component.css']
})
export class PresentArtisansListComponent{
  @Input() maxPage!:number
  showList:Boolean = true
  artisans= []
  clients= []
  numPageActuel = 1
  @Input() keyword = ""

  constructor(private artisanService:ArtisanService){
    
  }
  ngOnInit(){
    this.init()
  }
   init() {
   this.showList = true
    //if (this.keyword == "all") {
      //this.artisanService.getAll((datas)=>{
      //    this.artisans = datas
      //    this.showList = true
      //})
    //}
  }
  reload(){
    console.log("------Reloading-------")
    this.showList = false
    setTimeout(()=> this.showList=true, 500)
  }
  
}
