import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-vehicules-admin',
  templateUrl: './vehicules-admin.component.html',
  styleUrls: ['./vehicules-admin.component.scss']
})
export class VehiculesAdminComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Administrateur') {
      this.srv.secuRoute()
    }
  }

}
