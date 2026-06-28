import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationVehiculeSociete } from 'src/app/entite/ReservationVehiculeSociete';
import { Vehicule } from 'src/app/entite/Vehicule';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  reservationFutur: ReservationVehiculeSociete[]
  reservationPasse: ReservationVehiculeSociete[]
  vehiculeCourant: Vehicule
  erreurTechnique = false;
  enumStatus = ['EN_SERVICE', 'EN_REPARATION','HORS_SERVICE']

  constructor(private adminService: AdminService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.adminService.recupererReservationFuture(this.route.snapshot.paramMap.get("id"))
    .subscribe(reservations => {
      this.reservationFutur = reservations,
      () => console.log("erreur")
    });

    this.adminService.recupererReservationPasse(this.route.snapshot.paramMap.get("id"))
    .subscribe(reservations => {
      this.reservationPasse = reservations,
      () => console.log("erreur")
    })

    this.adminService.recupererById(this.route.snapshot.paramMap.get("id")).subscribe(vehi => this.vehiculeCourant = vehi)
  }

  retourAllVoitures() {
    this._router.navigateByUrl("/administrateur/vehicules")
  }

  switchStatus(status) {
    this.adminService.editVehicule(this.vehiculeCourant, status).subscribe(
      vehi => this.vehiculeCourant = vehi,
      () => this.erreurTechnique = true
      )
  }

}
