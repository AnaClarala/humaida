import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe();
    this.router.navigateByUrl("/connexion");
  }

}
