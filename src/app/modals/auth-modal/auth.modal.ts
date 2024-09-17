import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from 'src/app/auth/auth.domains';
import { AuthService } from '../../auth/auth.service';


@Component({
    selector: 'ngbd-modal-content',
    templateUrl: 'auth.modal.html',
    styleUrls: ['auth.modal.css']
})
export class NgbdModalContent implements OnInit {
    err: boolean;
    roleAdmin = false;
    roleChauffeur = false;

    collegueCourant: Collegue

    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private authServ: AuthService) { }

    ngOnInit() {
        this.authServ.collegueConnecteObs
            .subscribe(
                col => {
                    if (col.roles.includes('ROLE_ADMINISTRATEUR')) {
                        col.roles.push('ROLE_CHAUFFEUR')
                    }

                    this.roleAdmin = col.roles.includes('ROLE_ADMINISTRATEUR');
                    this.roleChauffeur = col.roles.includes('ROLE_CHAUFFEUR');
                },
                // en cas d'erreur, affichage d'un message d'erreur
                err => this.err = true
            );
    }

    statusSelected(valueBtn: string): void {
        this.authServ.collegueConnecteObs
            .subscribe(
                col => {
                    col.status = valueBtn;
                    this.collegueCourant = col;
                    this.authServ.saveStatus(this.collegueCourant)
                    if (col.status!='Collaborateur') {
                        localStorage.setItem('droit', 'ok')
                    }
                },
                // en cas d'erreur, affichage d'un message d'erreur
                err => this.err = true
            );
    }
}