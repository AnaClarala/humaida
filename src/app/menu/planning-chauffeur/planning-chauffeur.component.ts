import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-planning-chauffeur',
  templateUrl: './planning-chauffeur.component.html',
  styleUrls: ['./planning-chauffeur.component.scss']
})
export class PlanningChauffeurComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Chauffeur') {
      this.srv.secuRoute()
    }
  }

}
