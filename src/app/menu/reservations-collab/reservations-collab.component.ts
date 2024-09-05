import { Component, Input, OnInit } from '@angular/core';
import { Covoiturage, listResa1, listResa2 } from '../../mock/mock-reservations'

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations-collab.component.html',
  styleUrls: ['./reservations-collab.component.scss']
})
export class ReservationsCollabComponent implements OnInit {

  @Input() list: Covoiturage[] = listResa1;
  @Input() listHist: Covoiturage[] = listResa2;


  constructor() { }

  ngOnInit(): void {
  }

}
