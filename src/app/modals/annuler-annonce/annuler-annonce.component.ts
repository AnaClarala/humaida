import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnoncesCollabService } from 'src/app/menu/annonces-collab/annonces-collab.service';
import { Annonce } from 'src/app/menu/annonces-collab/annonces.domains';
import { ListeAnnoncesCollabService } from 'src/app/menu/annonces-collab/liste-annonces-collab/liste-annonces-collab.service';

@Component({
  selector: 'app-annuler-annonce',
  templateUrl: './annuler-annonce.component.html',
  styleUrls: ['./annuler-annonce.component.scss']
})
export class AnnulerAnnonceComponent implements OnInit {
  annonce: Annonce = this.dataSrv.recupererAnnonceCourante();
  constructor(public activeModal: NgbActiveModal, private dataSrv: ListeAnnoncesCollabService) { }

  ngOnInit(): void {
    
  }

  annulerAnnonce() {
    this.dataSrv.annulerAnnonce().subscribe();
  }

}
