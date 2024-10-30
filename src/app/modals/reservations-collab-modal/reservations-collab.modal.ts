import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservations-collab-modal',
  templateUrl: './reservations-collab.modal.html',
  styleUrls: ['./reservations-collab.modal.scss']
})
export class ReservationsCollabModal implements OnInit {
  err: boolean;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
