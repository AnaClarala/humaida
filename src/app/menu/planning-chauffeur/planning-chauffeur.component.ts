import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-planning-chauffeur',
  templateUrl: './planning-chauffeur.component.html',
  styleUrls: ['./planning-chauffeur.component.scss']
})
export class PlanningChauffeurComponent implements OnInit {


  dateNow = new Date();
  dateNext = new Date();
  

  constructor(private srv: AuthService) { 
  }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Chauffeur') {
      this.srv.secuRoute()
    }
    this.dateNext.setDate(this.dateNext.getDate()+7);
  }


  semainePrecedente() {
    this.dateNow.setDate(this.dateNow.getDate() - 7);
    this.dateNext.setDate(this.dateNext.getDate() - 7);
  }
  semaineSuivante() {
    this.dateNow.setDate(this.dateNow.getDate() + 7);
    this.dateNext.setDate(this.dateNext.getDate() + 7);
  }
}
