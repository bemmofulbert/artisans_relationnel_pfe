import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/services/Client.service';
import { ClientModel } from 'src/app/services/models/client.model';

@Component({
  selector: 'app-enregistrement2',
  templateUrl: './enregistrement2.component.html',
  styleUrls: ['./enregistrement2.component.css', '../../profils.css'],
})
export class Enregistrement2Component {
  @Input() client!: ClientModel;
  @Input() visible: Boolean = false;

  @Output() prec: EventEmitter<any> = new EventEmitter();
  @Output() next2: EventEmitter<any> = new EventEmitter();

  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
  });
  private formValueSubcription: Subscription | null = null;

  onPrec() {
    this.prec.emit(null);
  }
  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.valider()) this.next2.emit();
    return false;
  }
  check(nom: string | any[]) {
    if (nom.length >= 3) return true;
    else return false;
  }
  valider() {
    return !(!this.check(this.client.nom) || !this.check(this.client.prenom));
  }
  ngOnInit() {
    this.formValueSubcription = this.formGroup.valueChanges.subscribe(
      (data) => {
        this.client.nom = data.nom;
        this.client.prenom = data.prenom;
      }
    );
  }

  ngOnDestroy(): void {
    this.formValueSubcription?.unsubscribe();
  }
}
