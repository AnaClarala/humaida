import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationCollabService } from '../../menu/reservations-collab/reservations-collab.service'
import { Covoiturage } from '../../mock/mock-reservations'

@Component({
  selector: 'app-reservations-collab-modal',
  templateUrl: './reservations-collab.modal.html',
  styleUrls: ['./reservations-collab.modal.scss']
})
export class ReservationsCollabModal implements OnInit {
  err: boolean;
  covoit: Covoiturage = this.dataSrv.recupererCovoiturageCourant();

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private dataSrv: ReservationCollabService) { }

  ngOnInit(): void {
  }

}
