import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { ReservationsComponent } from './Menu/reservations/reservations.component';
import { AnnoncesComponent } from './Menu/annonces/annonces.component';
import { StatistiquesComponent } from './Menu/statistiques/statistiques.component';
import { PageCollabComponent } from './pages/page-collab/page-collab.component';
import { PageChauffeurComponent } from './pages/page-chauffeur/page-chauffeur.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';


const routes: Routes =  [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  { path: 'collaborateur', component: PageCollabComponent},
  { path: 'chauffeur', component: PageChauffeurComponent},
  { path: 'admin', component: PageAdminComponent},
  { path: 'collaborateur/reservations', component: ReservationsComponent},
  { path: 'collaborateur/annonces', component: AnnoncesComponent},
  { path: 'collaborateur/statistiques', component: StatistiquesComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
