import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AnnoncesCollabService } from './annonces-collab.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationCovoiturageComponent } from 'src/app/modals/confirmation-covoiturage/confirmation-covoiturage.component';
import { Time } from '@angular/common';


export interface CovoiturageFormulaire {
  depart?: string;
  destination?: string;
  marqueVoiture?: string;
  modeleVoiture?: string;
  imageUrl?: string;
  place?: number;
  date?: Date;
  horaire?: Time;
}
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces-collab.component.html',
  styleUrls: ['./annonces-collab.component.scss']
})


export class AnnoncesCollabComponent implements OnInit {

  heures: number[];
  minutes: number[];
  todayString = new Date().toISOString().substring(0,10);
  covoiturageFormulaire: CovoiturageFormulaire = {};

  constructor(private srv: AuthService, private annonceCollabSrv: AnnoncesCollabService, private modalService: NgbModal) { }

  ngOnInit(): void {

    let lesheures = []
    for (let i = 1; i < 25; i++) {
      lesheures.push(i)
    }
    this.heures = lesheures

    let lesminutes = []
    for (let i = 0; i < 6; i++) {
      lesminutes.push(i * 10)
    }

    this.minutes = lesminutes;
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
  }

  afficherModal() {
    this.annonceCollabSrv.creerCovoiturage(this.covoiturageFormulaire)
    this.modalService.open(ConfirmationCovoiturageComponent, { centered: true })
  }
}

