import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalConfig } from '../../config.global'
import { Router } from '@angular/router';
import anime  from 'animejs';

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
  
  ngAfterViewInit(): void {
      // Wrap every letter in a span
  const textWrapper = document.querySelector('.an-1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.an-1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.an-1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
    color: "#43c281"
  });


  }
}
