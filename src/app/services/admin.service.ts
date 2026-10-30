import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Collegue } from '../auth/auth.domains';
import { Chauffeur } from '../entite/Chauffeur';
import { ReservationVehiculeSociete } from '../entite/ReservationVehiculeSociete';
import { Vehicule } from '../entite/Vehicule';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  vehiculesSubject = new Subject<Vehicule>();

  chauffeurSubject = new Subject<Chauffeur>();

  constructor(private http: HttpClient, private _router: Router) { }

  /* Page vehicules + Détails*/
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

  /* Page Chauffeurs */

  addToSubC(c: Chauffeur): void {
    this.chauffeurSubject.next(c)
  }

  subscibeToChauffeurSub(): Observable<Chauffeur> {
    return this.chauffeurSubject.asObservable()
  }

  recupererAllChauffeurs(): Observable<Chauffeur[]> {
    return this.http.get<Chauffeur[]>(`${environment.baseUrl}chauffeur`)
  }

  recupererByMatricule(matEntree): Observable<Chauffeur[]> {
    return this.http.get<Chauffeur[]>(`${environment.baseUrl}chauffeur?type=matricule&value=${matEntree}`)
  }

  recupererByNom(nomEntree): Observable<Chauffeur[]> {
    return this.http.get<Chauffeur[]>(`${environment.baseUrl}chauffeur?type=nom&value=${nomEntree}`)
  }

  recupererByPrenom(prenomEntree): Observable<Chauffeur[]> {
    return this.http.get<Chauffeur[]>(`${environment.baseUrl}chauffeur?type=prenom&value=${prenomEntree}`)
  }

  posterChauffeur(chauffeurAPoster: Chauffeur): Observable<Chauffeur> {
    return this.http.post<Chauffeur>(`${environment.baseUrl}chauffeur`, chauffeurAPoster)
  }

  recupererAllCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(`${environment.baseUrl}collegue/isNot?role=ROLE_CHAUFFEUR`)
  }
}
