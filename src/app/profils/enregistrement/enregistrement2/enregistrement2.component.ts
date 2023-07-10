import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-enregistrement2',
  templateUrl: './enregistrement2.component.html',
  styleUrls: ['./enregistrement2.component.css','../../profils.css']
})
export class Enregistrement2Component {
  @Input() cli!:ClientModel
  @Input() visible:Boolean = false;
  verifNow:Boolean = false;

  @Output() prec: EventEmitter<any> = new EventEmitter();
  @Output() next2: EventEmitter<any> = new EventEmitter();
  onPrec(){
    this.prec.emit(null);
  }
  onSubmit(){
    this.verifNow = true
    if(this.valider()) this.next2.emit();
    return false
  }
  check(nom: string | any[]){
    if(nom.length >= 3 ) return true;
    else return false;
  }
  valider(){
    if(!this.check(this.cli.nom) || !this.check(this.cli.prenom)) return false
    else return true
  }

}
