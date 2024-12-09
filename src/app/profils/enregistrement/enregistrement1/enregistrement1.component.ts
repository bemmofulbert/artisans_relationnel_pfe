import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-enregistrement1',
  templateUrl: './enregistrement1.component.html',
  styleUrls: ['./enregistrement1.component.css', '../../profils.css'],
})
export class Enregistrement1Component {
  @Input() client!: ClientModel;
  @Input() visible: Boolean = true;
  @Input() vmotdepasse: string;
  mailExist: Boolean = false;

  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    mail: ['', [Validators.required, Validators.email]],
    motdepasse: ['', [Validators.required]],
    vmotdepasse: ['', [Validators.required]],
  });
  private formValueSubcription: Subscription | null = null;

  constructor(private clientService: ClientService) {}

  @Output() next: EventEmitter<any> = new EventEmitter();
  checkEmail() {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.formGroup.get('mail').value);
  }
  checkEmail2() {
    this.clientService.clientVerif(this.client.mail, (data) => {
      data['exist'] === true
        ? (this.mailExist = true)
        : (this.mailExist = false);
    });
  }
  checkmotdepasse() {
    if (this.formGroup.get('motdepasse').value.length >= 6) return true;
    else return false;
  }
  checkvmotdepasse() {
    return (
      this.formGroup.get('motdepasse').value ===
      this.formGroup.get('vmotdepasse').value
    );
  }
  valider() {
    let test = true;
    this.checkEmail2();
    if (
      !this.checkEmail() ||
      !this.checkmotdepasse() ||
      !this.checkvmotdepasse() ||
      this.mailExist
    )
      test = false;
    return test;
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.valider()) this.next.emit(null);
    return false;
  }
  onEyePassClick() {
    var pass = document.getElementById('motdepasse');
    if (pass.getAttribute('type') == 'password') {
      pass.setAttribute('type', 'text');
    } else {
      pass.setAttribute('type', 'password');
    }
  }
  onEyevmotdepasseClick() {
    var vmotdepasse = document.getElementById('vmotdepasse');
    if (vmotdepasse.getAttribute('type') == 'password') {
      vmotdepasse.setAttribute('type', 'text');
    } else {
      vmotdepasse.setAttribute('type', 'password');
    }
  }
  ngOnInit() {
    this.formValueSubcription = this.formGroup.valueChanges.subscribe(
      (data) => {
        this.client.mail = data.mail;
        this.client.motdepasse = data.motdepasse;
        this.vmotdepasse = data.vmotdepasse;
      }
    );
  }

  ngOnDestroy(): void {
    this.formValueSubcription?.unsubscribe();
  }
}
