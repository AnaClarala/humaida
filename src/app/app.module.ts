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
import { ReservationsComponent } from './Menu/reservations/reservations.component';
import { AnnoncesComponent } from './Menu/annonces/annonces.component';
import { StatistiquesComponent } from './Menu/statistiques/statistiques.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const ROUTES: Routes = [
  { path: 'collaborateur/reservations', component: ReservationsComponent},
  { path: 'collaborateur/annonces', component: AnnoncesComponent},
  { path: 'collaborateur/statistiques', component: StatistiquesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    NgbdModalContent,
    MenuComponent,
    ReservationsComponent,
    AnnoncesComponent,
    StatistiquesComponent
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
