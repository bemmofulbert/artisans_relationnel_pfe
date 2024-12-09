import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';
import { LocalStorageService } from 'angular-localstorage';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css', '../profils.css'],
})
export class ConnexionComponent implements OnInit, OnDestroy {
  show = true;
  mail: string = '';
  pass: string = '';
  incorrect: Boolean = false;
  incomplet: Boolean = false;
  isconnecting: Boolean = false;
  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    mail: [this.mail, [Validators.required]],
    pass: [this.pass, [Validators.required]],
  });
  private formValueSubcription: Subscription | null = null;

  constructor(private clientService: ClientService, private router: Router) {}

  onSubmit($event: Event) {
    $event.preventDefault();

    this.incorrect = false;
    this.incomplet = false;

    if (this.mail == '' || this.pass == '') {
      this.incomplet = true;
      this.isconnecting = false;
      return;
    }
    this.isconnecting = true;
    this.clientService.clientVerif(this.mail, (data) => {
      if (data['activated']) {
        this.clientService.clientLogin(this.mail, this.pass, (match) => {
          if (match) {
            this.clientService.getOneWith({ mail: this.mail }, (clientData) => {
              let client: ClientModel = ClientModel.data_to_model(clientData);
              localStorage.setItem('currentUser', JSON.stringify(client));
              setTimeout(() => {
                this.router.navigate(['']);
                this.isconnecting = false;
              }, 1000);
            });
          } else this.incorrect = true;
        });
      } else this.incorrect = true;
    });

    this.isconnecting = false;
  }

  onEyePassClick() {
    var pass = document.getElementById('pass');
    if (pass.getAttribute('type') == 'password') {
      pass.setAttribute('type', 'text');
    } else {
      pass.setAttribute('type', 'password');
    }
  }
  ngOnInit() {
    this.formValueSubcription = this.formGroup.valueChanges.subscribe(
      (data) => {
        this.mail = data.mail.toLowerCase();
        this.pass = data.pass;
      }
    );
  }

  ngOnDestroy(): void {
    this.formValueSubcription?.unsubscribe();
  }
}
