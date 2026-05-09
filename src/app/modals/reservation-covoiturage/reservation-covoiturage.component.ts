import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationCollabService } from 'src/app/menu/reservations-collab/reservations-collab.service';
import { Covoiturage } from 'src/app/mock/mock-reservations';

@Component({
  selector: 'app-reservation-covoiturage',
  templateUrl: './reservation-covoiturage.component.html',
  styleUrls: ['./reservation-covoiturage.component.scss']
})
export class ReservationCovoiturageComponent implements OnInit {
  err: boolean;
  covoit: Covoiturage = this.dataSrv.recupererCovoiturageCourant();

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private dataSrv: ReservationCollabService) { }

  ngOnInit(): void {
  }

}
