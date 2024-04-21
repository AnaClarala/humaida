import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { ReservationsCollabComponent } from './Menu/reservations-collab/reservations-collab.component';
import { AnnoncesCollabComponent } from './Menu/annonces-collab/annonces-collab.component';
import { StatistiquesCollabComponent } from './Menu/statistiques-collab/statistiques-collab.component';
import { PageCollabComponent } from './pages/page-collab/page-collab.component';
import { PageChauffeurComponent } from './pages/page-chauffeur/page-chauffeur.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';


const routes: Routes =  [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  { path: 'collaborateur', component: PageCollabComponent},
  { path: 'chauffeur', component: PageChauffeurComponent},
  { path: 'admin', component: PageAdminComponent},
  { path: 'collaborateur/reservations', component: ReservationsCollabComponent},
  { path: 'collaborateur/annonces', component: AnnoncesCollabComponent},
  { path: 'collaborateur/statistiques', component: StatistiquesCollabComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
