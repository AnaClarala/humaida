import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReservationVehiculeSociete } from '../entite/ReservationVehiculeSociete';
import { Vehicule } from '../entite/Vehicule';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  vehiculesSubject = new Subject<Vehicule>();

  constructor(private http: HttpClient, private _router: Router) { }

  recupererAllVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${environment.baseUrl}vehicule`)
  }

  recupererByImmat(immatEntree): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${environment.baseUrl}vehicule?type=immatriculation&value=${immatEntree}`)
  }

  recupererById(idVehicule): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${environment.baseUrl}vehicule?id=${idVehicule}`)
  }

  recupererReservationFuture(idVehicule): Observable<ReservationVehiculeSociete[]> {
    return this.http.get<ReservationVehiculeSociete[]>(`${environment.baseUrl}deplacement-pro/vehicule-reserve?id=${idVehicule}`)
  }

  recupererReservationPasse(idVehicule): Observable<ReservationVehiculeSociete[]> {
    return this.http.get<ReservationVehiculeSociete[]>(`${environment.baseUrl}deplacement-pro/vehicule-archive?id=${idVehicule}`)
  }

  recupererByMarque(marqueEntree): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${environment.baseUrl}vehicule?type=marque&value=${marqueEntree}`)
  }

  recupererByCate(cateEntree): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${environment.baseUrl}vehicule?type=categorie&value=${cateEntree}`)
  }

  posterVehicule(vehiculeAPoster: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(`${environment.baseUrl}vehicule`, vehiculeAPoster)
  }

  editVehicule(v:Vehicule, status: string) {
    v.status = status
    return this.http.put<Vehicule>(`${environment.baseUrl}vehicule`, v)
  }

  addToSub(v:Vehicule): void {
    this.vehiculesSubject.next(v)
  }

  subscibeToVehiculesSub(): Observable<Vehicule> {
    return this.vehiculesSubject.asObservable()
  }

  pageDetails(idVehicule) {
    this._router.navigateByUrl(`/administrateur/vehicules/${idVehicule}`)
  }
}
