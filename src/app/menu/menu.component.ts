import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  collegueCo: Collegue

  constructor(private activatedRoute: ActivatedRoute, private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.recupCollegueCo();
  }

  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe();
    this.router.navigateByUrl("/connexion");
  }

  recupCollegueCo() {
    return this.authSrv.collegueConnecteObs.subscribe(col => this.collegueCo = col)
  }

}
