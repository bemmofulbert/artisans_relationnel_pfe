import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/Client.service';

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
  constructor(private clientService:ClientService, private router:Router) {    
  }

  onSubmit(){
    if (this.mail=="" || this.pass=="") {this.incomplet=true; return;}
    this.clientService.clientVerif(this.mail,(data)=>{
      if(data['activated']){
        this.clientService.clientLogin(this.mail,this.pass,
          (match)=>{ if (match) this.router.navigate([''])
                    else this.incorrect=true }
        )
      }
      else this.incorrect = true;
    })
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
