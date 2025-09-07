import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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

  recupererByMarque(marqueEntree): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${environment.baseUrl}vehicule?type=marque&value=${marqueEntree}`)
  }

  recupererByCate(cateEntree): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${environment.baseUrl}vehicule?type=categorie&value=${cateEntree}`)
  }

  posterVehicule(vehiculeAPoster: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(`${environment.baseUrl}vehicule`, vehiculeAPoster)
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
