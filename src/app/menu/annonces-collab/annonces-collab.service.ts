import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Annonce } from './annonces.domains';
import { CovoiturageFormulaire } from './annonces-collab.component'
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})


export class AnnoncesCollabService {

    private annonceSub: Subject<Annonce> = new Subject();
    constructor(private http: HttpClient, private _router: Router) {
    }

    getAnnonceObs(): Observable<Annonce> {
        return this.annonceSub.asObservable();
    }

    creerCovoiturage(covoiturageFormulaire: CovoiturageFormulaire): Observable<any> {
        const body = {
            depart:covoiturageFormulaire.depart,
            destination: covoiturageFormulaire.destination,


        }
        return this.http.post('http://localhost:8080/covoiturage', covoiturageFormulaire);
    }

    getVehiculeId(immatriculation: string): Observable<number[]> {
        return this.http.get<number[]>(`http://localhost:8080/vehicule?immatriculation=${immatriculation}`);
    }

    // getChauffeurId()


}