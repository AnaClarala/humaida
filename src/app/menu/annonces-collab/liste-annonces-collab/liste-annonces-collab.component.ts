import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { ListeAnnoncesCollabService } from '../liste-annonces-collab/liste-annonces-collab.service'
import { Annonce } from '../annonces.domains';
import { DetailsAnnonceComponent } from 'src/app/modals/details-annonce/details-annonce.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnulerAnnonceComponent } from 'src/app/modals/annuler-annonce/annuler-annonce.component';

@Component({
  selector: 'app-liste-annonces-collab',
  templateUrl: './liste-annonces-collab.component.html',
  styleUrls: ['./liste-annonces-collab.component.scss']
})

export class ListeAnnoncesCollabComponent implements OnInit {
  @Input() list: Annonce[] = [];
  @Input() listHist: Annonce[] = [];
  page: number = 1;
  today = new Date();
  parametre: string;

  constructor(private srv: AuthService, private dataSrv: ListeAnnoncesCollabService, private modalService: NgbModal, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
    this.listerAnnonces();
    this.parametre = this.route.snapshot.queryParamMap.get("publication")
    
  }

  listerAnnonces() {
    this.dataSrv.lister().subscribe((element: Annonce[]) =>
      element.forEach((annonce: Annonce) => {
        if (new Date(annonce.date).getTime() > this.today.getTime()) {
          this.list.push(annonce)
        } else {
          this.listHist.push(annonce)
        }
      }));
  }
  afficherDetails(annonce: Annonce) {
    this.dataSrv.annonceCourante = annonce;
    this.modalService.open(DetailsAnnonceComponent, { centered: true });
    this.parametre = this.route.snapshot.queryParamMap.get("publication")
  }

  annulerAnnonce(annonce: Annonce) {
    this.dataSrv.annonceCourante = annonce;
    this.modalService.open(AnnulerAnnonceComponent, { centered: true });
    this.parametre = this.route.snapshot.queryParamMap.get("publication");
  }
}
