import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { last } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Chauffeur } from 'src/app/entite/Chauffeur';
import { CreerChauffeurComponent } from 'src/app/modals/creer-chauffeur/creer-chauffeur.component';
import { CreerVehiculeModalComponent } from 'src/app/modals/creer-vehicule-modal/creer-vehicule-modal.modal';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-chauffeurs-admin',
  templateUrl: './chauffeurs-admin.component.html',
  styleUrls: ['./chauffeurs-admin.component.scss']
})
export class ChauffeursAdminComponent implements OnInit {

  tabChauffeurs: Chauffeur[]

  nomIntrouvable = false;
  prenomIntrouvable = false;
  matriculeIntrouvable = false;

  constructor(private srv: AuthService, private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Administrateur') {
      this.srv.secuRoute()
    }
    this.noFilter()
  }

  noFilter(mat?, nom?, prenom?) {
    if (mat && nom && prenom) {
      mat.checked = false;
      nom.checked = false;
      prenom.checked = false;
    }
    this.adminService.recupererAllChauffeurs().subscribe(
      cBack =>
        cBack.forEach(chauffeur => {
          this.adminService.addToSubC(chauffeur)
        })
    )

    const tabChau = []

    this.adminService.subscibeToChauffeurSub().subscribe(cObsTab => {
      tabChau.push(cObsTab)
    })

    this.tabChauffeurs = tabChau;
  }

  findByMatricule(MatriculeEntree) {
    this.adminService.recupererByMatricule(MatriculeEntree).subscribe(cBack => {
      this.nomIntrouvable = false
      this.prenomIntrouvable = false
      this.matriculeIntrouvable = false
      this.tabChauffeurs = cBack
      if (cBack.length < 1) {
        this.matriculeIntrouvable = true
      }
    })
  }

  findByNom(nomEntree) {
    this.adminService.recupererByNom(nomEntree).subscribe(cBack => {
      this.nomIntrouvable = false
      this.prenomIntrouvable = false
      this.matriculeIntrouvable = false
      this.tabChauffeurs = cBack
      if (cBack.length < 1) {
        this.nomIntrouvable = true
      }
    })
  }

  findByPrenom(prenomEntree) {
    this.adminService.recupererByPrenom(prenomEntree).subscribe(cBack => {
      this.nomIntrouvable = false
      this.prenomIntrouvable = false
      this.matriculeIntrouvable = false
      this.tabChauffeurs = cBack
      if (cBack.length < 1) {
        this.prenomIntrouvable = true
      }
    })
  }

  ajouterChauffeur() {
      this.modalService.open(CreerChauffeurComponent, { centered: true });
    
  }

}
