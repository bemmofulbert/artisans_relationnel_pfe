import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-enregistrement1',
  templateUrl: './enregistrement1.component.html',
  styleUrls: ['./enregistrement1.component.css','../../profils.css']
})
export class Enregistrement1Component {
  
  @Input() cli!:ClientModel;
  @Input() visible:Boolean = true;
  @Input() vPass:string;
  verifNow:Boolean = false;
  mailExist:Boolean = false;
  eyePass = "assets/vignettes/eye-off.svg"
  eyeVPass = "assets/vignettes/eye-off.svg"

  constructor(private clientService:ClientService) {

  }

  @Output() next: EventEmitter<any> = new EventEmitter();
  checkEmail() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.cli.mail);
  }
  checkEmail2() {
    this.clientService.clientVerif(this.cli.mail,(data)=>{
      (data["exist"] === true) ? this.mailExist=true : this.mailExist = false;
    })
    
  }
  checkPass(){
    if(this.cli.motdepasse.length >= 6) return true;
    else return false;
  }
  checkVPass(){
    if(this.cli.motdepasse === this.vPass) return true;
    else return false;
  }
  valider(){
    let test = true;
    this.checkEmail2()
    if(!this.checkEmail() || !this.checkPass() || !this.checkVPass()) test = false
    return test
  }
  onNext(){
    this.verifNow = true;
    if(this.valider())
      this.next.emit(null);
  }
  onSubmit(){
    return false
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
  onEyeVPassClick() {
    var vpass = document.getElementById("vpass")
    if(vpass.getAttribute("type") == "password"){
      vpass.setAttribute("type","text")
      this.eyeVPass = "assets/vignettes/eye.svg"
    }else {
      vpass.setAttribute("type","password")
      this.eyeVPass = "assets/vignettes/eye-off.svg"
    }
  }
}
