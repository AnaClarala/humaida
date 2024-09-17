import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-statistiques-admin',
  templateUrl: './statistiques-admin.component.html',
  styleUrls: ['./statistiques-admin.component.scss']
})
export class StatistiquesAdminComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Administrateur') {
      this.srv.secuRoute()
    }
  }

}
