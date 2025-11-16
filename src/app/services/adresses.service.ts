import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressesService {

  adresseSub = new Subject<string[]>();
  apiAdresse:string="https://api-adresse.data.gouv.fr/search/";

  constructor(private http: HttpClient) { }

  getAdresseSub(): Observable<string[]>{
    return this.adresseSub.asObservable();
  }

  sendAdresseSub(adresses: string[]){
    this.adresseSub.next(adresses);
  }

  getAdresseBDD(adresse: string){
    let recherche="?q="+adresse;
    return this.http.get<any>(this.apiAdresse+recherche+'&limit=10');
  }
}
