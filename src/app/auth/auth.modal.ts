import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from './auth.domains';
import { AuthService } from './auth.service'

@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">Choisissez votre profil :</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Collaborateur</button>
    <button type="button" *ngIf="this.roleChauffeur" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Chauffeur</button>
    <button type="button" *ngIf="this.roleAdmin" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Administrateur</button>
    </div>
  `
})
export class NgbdModalContent implements OnInit {
    err: boolean;
    roleAdmin = false;
    roleChauffeur = false;


    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private authServ: AuthService) { }

    ngOnInit() {
        this.authServ.collegueConnecteObs
             .subscribe(
                col => {
                    if (col.roles.includes('ROLE_ADMINISTRATEUR')){
                        return this.roleAdmin = true;
                    } 
                },
                 // en cas d'erreur, affichage d'un message d'erreur
                 err => this.err = true
             );
    }

}