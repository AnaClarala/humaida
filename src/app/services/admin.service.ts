import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Vehicule } from '../entite/Vehicule';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

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
}
