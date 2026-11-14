import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from 'src/app/auth/auth.domains';
import { Chauffeur } from 'src/app/entite/Chauffeur';
import { AdminService } from 'src/app/services/admin.service';

interface postChauffeur {
  permis?: string
  telephone?: string
  urlImage?: string,
  collegueId?: number
}

@Component({
  selector: 'app-creer-chauffeur',
  templateUrl: './creer-chauffeur.component.html',
  styleUrls: ['./creer-chauffeur.component.scss']
})


export class CreerChauffeurComponent implements OnInit {

  newChauffeur: postChauffeur = {};
  collNoChauTab: Collegue[]
  toutOk = false;
  erreurTechnique = false;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private adminSrv: AdminService, private http: HttpClient) { }

  ngOnInit(): void {
    this.adminSrv.recupererAllCollegues().subscribe(colTab =>
      this.collNoChauTab = colTab
      )
  }

  submitChauffeur() {
    this.adminSrv.posterChauffeur(this.newChauffeur).subscribe(
      chau => {
        this.adminSrv.addToSubC(chau)
        this.toutOk = true
        this.activeModal.close()
      },
      () => {
        this.erreurTechnique = true
        this.toutOk = false
      })
  }

}
