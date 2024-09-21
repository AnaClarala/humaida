import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces-collab.component.html',
  styleUrls: ['./annonces-collab.component.scss']
})
export class AnnoncesCollabComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
  }
}
