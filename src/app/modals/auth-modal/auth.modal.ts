import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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


    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private authServ: AuthService) { }

    ngOnInit() {
        this.authServ.collegueConnecteObs
             .subscribe(
                col => {
                    this.roleAdmin = col.roles.includes('ROLE_ADMINISTRATEUR');
                    this.roleChauffeur = col.roles.includes('ROLE_CHAUFFEUR');
                },
                 // en cas d'erreur, affichage d'un message d'erreur
                 err => this.err = true
             );
    }
}