import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './profils/connexion/connexion.component';
import { ActivationComponent } from './profils/enregistrement/activation/activation.component';
import { EnregistrementComponent } from './profils/enregistrement/enregistrement.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes =[
  {path: '', component: AccueilComponent },
  {path: 'connexion', component: ConnexionComponent },
  {path: 'activated/:id/:code',component: ActivationComponent},
  {path: 'enregistrement',component: EnregistrementComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
