import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-page-chauffeur',
  templateUrl: './page-chauffeur.component.html',
  styleUrls: ['./page-chauffeur.component.scss']
})
export class PageChauffeurComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    this.srv.secuRoute()
  }

}
