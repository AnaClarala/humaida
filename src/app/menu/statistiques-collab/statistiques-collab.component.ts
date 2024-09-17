import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques-collab.component.html',
  styleUrls: ['./statistiques-collab.component.scss']
})
export class StatistiquesCollabComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
  }

}
