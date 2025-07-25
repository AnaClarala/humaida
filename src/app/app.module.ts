import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './tech/tech.component';
import { NgbdModalContent } from './modals/auth-modal/auth.modal';
import {RouterModule, Routes} from '@angular/router';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ReservationsCollabComponent } from './menu/reservations-collab/reservations-collab.component';
import { AnnoncesCollabComponent } from './menu/annonces-collab/annonces-collab.component';
import { StatistiquesCollabComponent } from './menu/statistiques-collab/statistiques-collab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanningChauffeurComponent } from './menu/planning-chauffeur/planning-chauffeur.component';
import { OccupationChauffeurComponent } from './menu/occupation-chauffeur/occupation-chauffeur.component';
import { ChauffeursAdminComponent } from './menu/chauffeurs-admin/chauffeurs-admin.component';
import { PageCollabComponent } from './pages/page-collab/page-collab.component';
import { PageChauffeurComponent } from './pages/page-chauffeur/page-chauffeur.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { StatistiquesAdminComponent } from './menu/statistiques-admin/statistiques-admin.component';
import { VehiculesAdminComponent } from './menu/vehicules-admin/All Vehicules/vehicules-admin.component';
import { ConfirmationCovoiturageComponent } from './modals/confirmation-covoiturage/confirmation-covoiturage.component';
import { ReservationsCollabModal } from './modals/reservations-collab-modal/reservations-collab.modal';
import { CreerComponent } from './menu/reservations-collab/creer/creer.component';
import { ListeAnnoncesCollabComponent } from './menu/annonces-collab/liste-annonces-collab/liste-annonces-collab.component';
import { DetailsAnnonceComponent } from './modals/details-annonce/details-annonce.component';
import { CreerVehiculeModalComponent } from './modals/creer-vehicule-modal/creer-vehicule-modal.modal';
import { DetailsComponent } from './menu/vehicules-admin/Details/details.component';
import { AnnulerAnnonceComponent } from './modals/annuler-annonce/annuler-annonce.component';
import { FooterComponent } from './footer/footer/footer.component';
import { CreerChauffeurComponent } from './modals/creer-chauffeur/creer-chauffeur.component';
import { ReservationCovoiturageComponent } from './modals/reservation-covoiturage/reservation-covoiturage.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    NgbdModalContent,
    MenuComponent,
    PageCollabComponent,
    PageChauffeurComponent,
    PageAdminComponent,
    ReservationsCollabComponent,
    AnnoncesCollabComponent,
    StatistiquesCollabComponent,
    PlanningChauffeurComponent,
    OccupationChauffeurComponent,
    ChauffeursAdminComponent,
    StatistiquesAdminComponent,
    VehiculesAdminComponent,
    ConfirmationCovoiturageComponent,
    ReservationsCollabModal,
    CreerComponent,
    ListeAnnoncesCollabComponent,
    DetailsAnnonceComponent,
    CreerVehiculeModalComponent,
    DetailsComponent,
    FooterComponent,
    CreerChauffeurComponent,
    ReservationCovoiturageComponent,
    AnnulerAnnonceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
