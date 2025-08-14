import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicule } from 'src/app/entite/Vehicule';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-creer-vehicule-modal',
  templateUrl: './creer-vehicule-modal.modal.html',
  styleUrls: ['./creer-vehicule-modal.modal.scss']
})
export class CreerVehiculeModalComponent implements OnInit {

  newVehicule: Vehicule = {};
  verifImmat: string;
  toutOk = false;
  erreurTechnique = false;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private adminSrv: AdminService) { }

  ngOnInit(): void {
  }

  submitVehicule() {
    this.adminSrv.posterVehicule(this.newVehicule).subscribe(
      vehi => {
        this.toutOk = true
        this.activeModal.close()
      }, 
      error => {
        this.erreurTechnique = true
        this.toutOk = false
      })
  }

}
