import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { ListeAnnoncesCollabService } from '../liste-annonces-collab/liste-annonces-collab.service'
import { Annonce } from '../annonces.domains';
import { DetailsAnnonceComponent } from 'src/app/modals/details-annonce/details-annonce.component';

@Component({
  selector: 'app-liste-annonces-collab',
  templateUrl: './liste-annonces-collab.component.html',
  styleUrls: ['./liste-annonces-collab.component.scss']
})

export class ListeAnnoncesCollabComponent implements OnInit {
  @Input() list: Annonce[] = [];
  @Input() listHist: Annonce[] = [];
  page: number = 1;

  constructor(private srv: AuthService, private dataSrv: ListeAnnoncesCollabService, private modalService: NgbModal) { 
    this.remplir();
  }

  ngOnInit(): void {
  }
  remplir(): void {
    const annonce1 = new Annonce({ depart: "Paris", arrive: "Marseille", marqueVoiture: "Opel", modeleVoiture: "Corsa", place: 2, date: new Date(), horaire: null, collegueId: 7 });
    const annonce2 = new Annonce({ depart: "Montpellier", arrive: "Nîmes", marqueVoiture: "Renault", modeleVoiture: "Kangoo", place: 4, date: new Date(), horaire: null, collegueId: 7 })
    this.list.push(annonce1);
    this.list.push(annonce2);
    this.listHist.push(annonce1);
    this.listHist.push(annonce2);
    this.listHist.push(annonce1);
    this.listHist.push(annonce2);
  }

  afficherDetails(annonce: Annonce){
    this.dataSrv.annonceCourante = annonce;
    this.modalService.open(DetailsAnnonceComponent, { centered: true });
  }
}
