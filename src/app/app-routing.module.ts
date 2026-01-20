import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { ChauffeursAdminComponent } from './menu/chauffeurs-admin/chauffeurs-admin.component';
import { OccupationChauffeurComponent } from './menu/occupation-chauffeur/occupation-chauffeur.component';
import { PlanningChauffeurComponent } from './menu/planning-chauffeur/planning-chauffeur.component';
import { StatistiquesCollabComponent } from './menu/statistiques-collab/statistiques-collab.component';
import { AnnoncesCollabComponent } from './menu/annonces-collab/annonces-collab.component';
import { ReservationsCollabComponent } from './menu/reservations-collab/reservations-collab.component';
import { PageCollabComponent } from './pages/page-collab/page-collab.component';
import { PageChauffeurComponent } from './pages/page-chauffeur/page-chauffeur.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { StatistiquesAdminComponent } from './menu/statistiques-admin/statistiques-admin.component';
import { VehiculesAdminComponent } from './menu/vehicules-admin/vehicules-admin.component';
import { CreerComponent } from './menu/reservations-collab/creer/creer.component';
import { ListeAnnoncesCollabComponent } from './menu/annonces-collab/liste-annonces-collab/liste-annonces-collab.component';


const routes: Routes =  [
  { path: '', redirectTo: '/tech', pathMatch: 'full'},
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent },
  /*Collaborateur*/
  { path: 'collaborateur/reservations', component: ReservationsCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/reservations/creer', component: CreerComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/annonces', component: ListeAnnoncesCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/annonces?publication=ok', component: ListeAnnoncesCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/annonces/creer', component: AnnoncesCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/statistiques', component: StatistiquesCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur', component: PageCollabComponent, canActivate: [StatutConnecteService]},
    /*Chauffeur*/
  { path: 'chauffeur/planning', component: PlanningChauffeurComponent, canActivate: [StatutConnecteService]},
  { path: 'chauffeur/occupation', component: OccupationChauffeurComponent, canActivate: [StatutConnecteService]},
  { path: 'chauffeur', component: PageChauffeurComponent, canActivate: [StatutConnecteService]},
  /*Administrateur*/
  { path: 'administrateur/chauffeurs', component: ChauffeursAdminComponent, canActivate: [StatutConnecteService]},
  { path: 'administrateur/statistiques', component: StatistiquesAdminComponent, canActivate: [StatutConnecteService]},
  { path: 'administrateur/vehicules', component: VehiculesAdminComponent, canActivate: [StatutConnecteService]},
  { path: 'administrateur', component: PageAdminComponent, canActivate: [StatutConnecteService]}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
