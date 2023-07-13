import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';
import { LocalStorageService } from "angular-localstorage"

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css','../profils.css'],
})
export class ConnexionComponent {
  show = true;
  mail:string="";
  pass:string="";
  incorrect:Boolean = false
  incomplet:Boolean = false
  eyePass = "assets/vignettes/eye-off.svg"
  isconnecting:Boolean = false
  constructor(private clientService:ClientService, private router:Router) {    
  }

  onSubmit(){
    this.isconnecting = true

    this.incorrect = false
    this.incomplet = false

    if (this.mail=="" || this.pass=="") {this.incomplet=true; setTimeout(()=>{this.isconnecting = false}, 2000); return;}
    this.clientService.clientVerif(this.mail,(data)=>{
      if(data['activated']){
        this.clientService.clientLogin(this.mail,this.pass,
          (match)=>{ 
            if (match) {
              this.clientService.getOneWith({mail:this.mail},
                (clientData) => {
                  let client:ClientModel = ClientModel.data_to_model(clientData)
                  localStorage.setItem('currentUser',JSON.stringify(client))
                  setTimeout(()=>{this.router.navigate(['']);this.isconnecting = false}, 2000)
                  
                }
              )
              
            } else this.incorrect=true
          }
        )
      }
      else this.incorrect = true;
    })

    setTimeout(()=>{this.isconnecting = false}, 2000)
  }

  onEyePassClick() {
    var pass = document.getElementById("pass")
    if(pass.getAttribute("type") == "password"){
      pass.setAttribute("type","text")
      this.eyePass = "assets/vignettes/eye.svg"
    }else {
      pass.setAttribute("type","password")
      this.eyePass = "assets/vignettes/eye-off.svg"
    }
  }
}
