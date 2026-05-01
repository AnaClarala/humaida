import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { last } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-chauffeurs-admin',
  templateUrl: './chauffeurs-admin.component.html',
  styleUrls: ['./chauffeurs-admin.component.scss']
})
export class ChauffeursAdminComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Administrateur') {
      this.srv.secuRoute()
    }
  }

}
