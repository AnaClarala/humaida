import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms'
import { AnnoncesCollabService } from './annonces-collab.service';


export interface CovoiturageFormulaire {
  depart: string;
  destination: string;
  immatriculation: string;
  marque: string;
  modele: string;
  nbPlacesDispos: number;
  dateHoraire: Date;
}
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces-collab.component.html',
  styleUrls: ['./annonces-collab.component.scss']
})


export class AnnoncesCollabComponent implements OnInit {

  constructor(private srv: AuthService, private annonceCollabSrv : AnnoncesCollabService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
  }
  onFormSubmit(annonceForm: NgForm) {
    this.annonceCollabSrv.creerCovoiturage(annonceForm.value).subscribe();
  }
}

