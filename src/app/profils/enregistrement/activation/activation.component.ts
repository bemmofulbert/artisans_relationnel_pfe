import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/Client.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css','../../profils.css']
})
export class ActivationComponent {
  id:string
  code:string
  activated:Boolean = false
  constructor(private router:Router, private activatedRoute: ActivatedRoute,private clientService:ClientService){
    this.id = activatedRoute.snapshot.params['id']
    this.code = activatedRoute.snapshot.params['code']
    this.clientService.clientActive(this.id,this.code,(active)=> {
      this.activated = active
    })
  }
  
  onSubmit() {
    this.router.navigate([""]);
  }
}
