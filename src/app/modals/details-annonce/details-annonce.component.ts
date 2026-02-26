import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Annonce } from 'src/app/menu/annonces-collab/annonces.domains';
import { ListeAnnoncesCollabService } from 'src/app/menu/annonces-collab/liste-annonces-collab/liste-annonces-collab.service';

@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.component.html',
  styleUrls: ['./details-annonce.component.scss']
})
export class DetailsAnnonceComponent implements OnInit {
  annonce: Annonce = this.dataSrv.recupererAnnonceCourante();
  constructor(public activeModal: NgbActiveModal, private dataSrv: ListeAnnoncesCollabService) { }

  ngOnInit(): void {
  }

}
