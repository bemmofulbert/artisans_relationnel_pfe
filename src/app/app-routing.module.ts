import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './profils/connexion/connexion.component';
import { ActivationComponent } from './profils/enregistrement/activation/activation.component';
import { EnregistrementComponent } from './profils/enregistrement/enregistrement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentArtisansComponent } from './present/present-artisans/present-artisans.component';
import { CreerOffreComponent } from './profils/creer-offre/creer-offre.component';
import { PresentArtisanComponent } from './present/present-artisan/present-artisan.component';
import { ArtDashboardComponent } from './profils/art-dashboard/art-dashboard.component';

const routes: Routes =[
  {path: '', component: AccueilComponent },
  {path: 'connexion', component: ConnexionComponent },
  {path: 'activated/:id/:code',component: ActivationComponent},
  {path: 'enregistrement',component: EnregistrementComponent},
  {path: 'artisans/keyword/:keyword',component: PresentArtisansComponent},
  {path: 'creer-offre' ,component: CreerOffreComponent},
  {path: 'artisan', component: PresentArtisanComponent},
  {path: 'artisanDashboard', component: ArtDashboardComponent},
  {path: 'artisanDashboard/:sideSelected', component: ArtDashboardComponent},
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
