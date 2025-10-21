import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { Vehicule } from 'src/app/entite/Vehicule';
import { CreerVehiculeModalComponent } from 'src/app/modals/creer-vehicule-modal/creer-vehicule-modal.modal';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-vehicules-admin',
  templateUrl: './vehicules-admin.component.html',
  styleUrls: ['./vehicules-admin.component.scss']
})
export class VehiculesAdminComponent implements OnInit {

  tabVehicules: Vehicule[]

  marqueIntrouvable = false;
  immatIntrouvable = false;
  cateIntrouvable = false;

  constructor(private srv: AuthService, private adminService: AdminService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Administrateur') {
      this.srv.secuRoute()
    }
    this.noFilter()

  }

  noFilter(cat?, marq?, imat?) {
    if (cat && marq && imat) {
      cat.checked = false;
      marq.checked = false;
      imat.checked = false;
    }
    this.adminService.recupererAllVehicules().subscribe(
      vBack =>
        vBack.forEach(vehicule => {
          this.adminService.addToSub(vehicule)
        })
    )

    const tabVehi = []

    this.adminService.subscibeToVehiculesSub().subscribe(vObsTab => {
      tabVehi.push(vObsTab)
    })

    this.tabVehicules = tabVehi;
  }

  findByImmat(immatEntree) {
    this.adminService.recupererByImmat(immatEntree).subscribe(vBack => {
      this.marqueIntrouvable = false
      this.immatIntrouvable = false
      this.cateIntrouvable = false
      this.tabVehicules = vBack
      if (vBack.length < 1) {
        this.immatIntrouvable = true
      }
    })
  }

  findByMarque(marqueEntree) {
    this.adminService.recupererByMarque(marqueEntree).subscribe(vBack => {
      this.marqueIntrouvable = false
      this.immatIntrouvable = false
      this.cateIntrouvable = false
      this.tabVehicules = vBack
      if (vBack.length < 1) {
        this.marqueIntrouvable = true
      }
    })
  }

  findByCate(cateEntree) {
    this.adminService.recupererByCate(cateEntree).subscribe(vBack => {
      this.marqueIntrouvable = false
      this.immatIntrouvable = false
      this.cateIntrouvable = false
      this.tabVehicules = vBack
      if (vBack.length < 1) {
        this.cateIntrouvable = true
      }
    })
  }

  toggle(elem) {
    elem.classList.toggle("voitureSelect");
  }

  ajouterVehicule() {
    this.modalService.open(CreerVehiculeModalComponent, { centered: true });
  }

  goDetails(idVehicule) {
    this.adminService.pageDetails(idVehicule);
  }

}
