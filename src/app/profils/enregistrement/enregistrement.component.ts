import { Component, Input } from '@angular/core';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css','../profils.css']
})
export class EnregistrementComponent {
  title = "Enregistrement | OneClick!Work"
  visible1:Boolean = true
  visible2:Boolean = false
  @Input() terminated:Boolean = false
  client:ClientModel = new ClientModel()
  private clientService:ClientService = new ClientService()
  onNext() {
    this.visible1 = false
    this.visible2 = true
    this.terminated = false
  }
  onPrec() {
    this.visible1 = true
    this.visible2 = false
    this.terminated = false
  }
  //enregistremnt du nouveau client
  onNext2() {
    this.clientService.create(this.client)
    this.visible1 = false
    this.visible2 = false
    this.terminated = true
  }
}
