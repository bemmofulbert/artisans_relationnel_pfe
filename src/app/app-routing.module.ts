import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './profils/connexion/connexion.component';
import { AppComponent } from './app.component';
import { Enregistrement1Component } from './profils/enregistrement1/enregistrement1.component';
import { Enregistrement2Component } from './profils/enregistrement2/enregistrement2.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes =[
  {path: '', component: AccueilComponent },
  {path: 'connexion', component: ConnexionComponent },
  {path: 'enregistrement1',component: Enregistrement1Component},
  {path: 'enregistrement2',component: Enregistrement2Component}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
