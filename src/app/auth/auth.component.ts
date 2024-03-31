import { Component, OnInit } from '@angular/core';
import {Collegue} from './auth.domains';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; 
import { NgbdModalContent } from '../modals/auth-modal/auth.modal';

/**
 * Formulaire d'authentification.
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent implements OnInit {


  collegue: Collegue = new Collegue({});
  err: boolean;

  constructor(private authSrv: AuthService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.modalService.open(NgbdModalContent, { centered: true });
  }

  connecter() {
    this.authSrv.connecter(this.collegue.email, this.collegue.motDePasse)
      .subscribe(
        // en cas de succès, affichage de la modale pour le choix du domaine : Collab, Chauffeur ou Admin
        
        col => {
          this.modalService.open(NgbdModalContent, { centered: true });
          return this.collegue = col; 
        },
        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

}
