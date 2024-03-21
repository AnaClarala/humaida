import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './tech/tech.component';
import { NgbdModalContent } from './auth/auth.modal';
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

export const ROUTES: Routes = [
  { path: 'collaborateur/reservations', component: ReservationsCollabComponent},
  { path: 'collaborateur/annonces', component: AnnoncesCollabComponent},
  { path: 'collaborateur/statistiques', component: StatistiquesCollabComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    NgbdModalContent,
    MenuComponent,
    ReservationsCollabComponent,
    AnnoncesCollabComponent,
    StatistiquesCollabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
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
