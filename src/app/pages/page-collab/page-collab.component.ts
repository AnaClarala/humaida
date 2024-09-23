import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-page-collab',
  templateUrl: './page-collab.component.html',
  styleUrls: ['./page-collab.component.scss']
})
export class PageCollabComponent implements OnInit {

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    this.srv.secuRoute();
  }

}
