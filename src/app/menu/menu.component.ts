import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { NgbdModalContent } from '../modals/auth-modal/auth.modal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  collegueCo: Collegue 

  storage: Storage

  constructor(private activatedRoute: ActivatedRoute, private authSrv: AuthService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.authSrv.collegueConnecteObs.subscribe(col => this.collegueCo = col);
    this.storage = localStorage
  }

  openModal() {
    this.modalService.open(NgbdModalContent, { centered: true });
  }

  seDeconnecter() {
    localStorage.clear();
    this.authSrv.seDeconnecter().subscribe();
    this.router.navigateByUrl("/connexion");
  }

}
