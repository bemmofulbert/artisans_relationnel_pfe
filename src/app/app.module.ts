import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './profils/connexion/connexion.component';
import { Enregistrement1Component } from './profils/enregistrement/enregistrement1/enregistrement1.component';
import { Enregistrement2Component } from './profils/enregistrement/enregistrement2/enregistrement2.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { AccueilHeaderComponent } from './accueil/accueil-header/accueil-header.component';
import { SamplePosterComponent } from './accueil/sample-poster/sample-poster.component';
import { ServicesBoxComponent } from './accueil/services-box/services-box.component';
import { NosResultatsComponent } from './accueil/nos-resultats/nos-resultats.component';
import { NosArtisantsComponent } from './accueil/nos-artisants/nos-artisants.component';
import { ItemMinImageTextComponent } from './accueil/services-box/item-min-image-text/item-min-image-text.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './accueil/carrousel/carrousel.component';
import { NosPrincipesComponent } from './accueil/nos-principes/nos-principes.component';
import { RejoinsNousComponent } from './accueil/rejoins-nous/rejoins-nous.component';
import { FooterComponent } from './footer/footer.component';
import { EnregistrementComponent } from './profils/enregistrement/enregistrement.component';
import { ActivationComponent } from './profils/enregistrement/activation/activation.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Enregistrement1Component,
    Enregistrement2Component,
    AccueilComponent,
    HeaderComponent,
    AccueilHeaderComponent,
    SamplePosterComponent,
    ServicesBoxComponent,
    NosResultatsComponent,
    NosArtisantsComponent,
    ItemMinImageTextComponent,
    NosPrincipesComponent,
    RejoinsNousComponent,
    FooterComponent,
    EnregistrementComponent,
    ActivationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarrouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
