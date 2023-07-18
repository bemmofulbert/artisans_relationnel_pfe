import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FileUploadModule } from 'ng2-file-upload';

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
import { PresentProjetsComponent } from './present/present-projets/present-projets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreerOffreComponent } from './profils/creer-offre/creer-offre.component';
import { PresentArtisansComponent } from './present/present-artisans/present-artisans.component';
import { PresentArtisansUnitComponent } from './present/present-artisans/present-artisans-unit/present-artisans-unit.component';
import { PresentArtisansListComponent } from './present/present-artisans/present-artisans-list/present-artisans-list.component';
import { PresentArtisanComponent } from './present/present-artisan/present-artisan.component';
import { PresentPlanTComponent } from './present/present-artisan/present-plan-t/present-plan-t.component';
import { PresentArtisanServiceComponent } from './present/present-artisan/present-artisan-service/present-artisan-service.component';
  
import { ArtDashboardComponent } from './profils/art-dashboard/art-dashboard.component';
import { ArtDashboardTopbarComponent } from './profils/art-dashboard/art-dashboard-topbar/art-dashboard-topbar.component';
import { ArtDashboardSidebarComponent } from './profils/art-dashboard/art-dashboard-sidebar/art-dashboard-sidebar.component';
import { ArtDashboardSidebarItemComponent } from './profils/art-dashboard/art-dashboard-sidebar/art-dashboard-sidebar-item/art-dashboard-sidebar-item.component';
import { ArtDashboardSidebarFootComponent } from './profils/art-dashboard/art-dashboard-sidebar/art-dashboard-sidebar-foot/art-dashboard-sidebar-foot.component';
import { ArtDashboardSidebarHeadComponent } from './profils/art-dashboard/art-dashboard-sidebar/art-dashboard-sidebar-head/art-dashboard-sidebar-head.component';
import { ArtDashboardWorkspaceProjetComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-projet/art-dashboard-workspace-projet.component';
import { ArtDashboardWorkspaceProjetSelectComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-projet/art-dashboard-workspace-projet-select/art-dashboard-workspace-projet-select.component';
import { ArtDashboardWorkspaceProjetListComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-projet/art-dashboard-workspace-projet-list/art-dashboard-workspace-projet-list.component';
import { ArtDashboardWorkspaceProjetListItemComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-projet/art-dashboard-workspace-projet-list/art-dashboard-workspace-projet-list-item/art-dashboard-workspace-projet-list-item.component';
import { ArtDashboardWorkspaceProfilsComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-profils/art-dashboard-workspace-profils.component';
import { MapCoordsComponent } from './profils/creer-offre/map-coords/map-coords.component';
import { ArtDashboardWorkspaceMessageComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-message/art-dashboard-workspace-message.component';
import { ArtDashboardWorkspaceMessageContactsComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-message/art-dashboard-workspace-message-contacts/art-dashboard-workspace-message-contacts.component';
import { ArtDashboardWorkspaceMessageChatSpaceComponent } from './profils/art-dashboard/workspace/art-dashboard-workspace-message/art-dashboard-workspace-message-chat-space/art-dashboard-workspace-message-chat-space.component';

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
    ActivationComponent,
    PresentProjetsComponent,
    CreerOffreComponent,
    PresentArtisansComponent,
    PresentArtisansUnitComponent,
    PresentArtisansListComponent,
    PresentArtisanComponent,
    PresentPlanTComponent,
    PresentArtisanServiceComponent,    
    
    ArtDashboardComponent,
    ArtDashboardTopbarComponent,
    ArtDashboardSidebarComponent,
    ArtDashboardSidebarItemComponent,
    ArtDashboardSidebarFootComponent,
    ArtDashboardSidebarHeadComponent,
    ArtDashboardWorkspaceProjetComponent,
    ArtDashboardWorkspaceProjetSelectComponent,
    ArtDashboardWorkspaceProjetListComponent,
    ArtDashboardWorkspaceProjetListItemComponent,
    ArtDashboardWorkspaceProfilsComponent,
    MapCoordsComponent,
    ArtDashboardWorkspaceMessageComponent,
    ArtDashboardWorkspaceMessageContactsComponent,
    ArtDashboardWorkspaceMessageChatSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarrouselComponent,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
