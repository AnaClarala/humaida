import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations-collab.component.html',
  styleUrls: ['./reservations-collab.component.scss']
})
export class ReservationsCollabComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
  }

}
