import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Annonce } from './annonces.domains';
import { CovoiturageFormulaire } from './annonces-collab.component'
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment'
import { AuthService } from 'src/app/auth/auth.service';
import { Collegue } from 'src/app/auth/auth.domains';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
    providedIn: 'root'
})


export class AnnoncesCollabService {

    private annonceSub: Subject<Annonce> = new Subject();
    private collegueCourant : Collegue;
    annonceCreee : Annonce;
    constructor(private http: HttpClient, private _router: Router, private authService : AuthService) {
        this.authService.collegueConnecteObs.subscribe(col => this.collegueCourant = col)
    }

    getAnnonceObs(): Observable<Annonce> {
        return this.annonceSub.asObservable();
    }

    creerCovoiturage(covoiturageFormulaire: CovoiturageFormulaire): void {
        const body = {
            collegueId: this.collegueCourant.id,
            depart:covoiturageFormulaire.depart,
            arrive: covoiturageFormulaire.destination,
            marqueVoiture : covoiturageFormulaire.marqueVoiture,
            modeleVoiture : covoiturageFormulaire.modeleVoiture,
            place : covoiturageFormulaire.place,
            date: covoiturageFormulaire.date,
            heureDepart: covoiturageFormulaire.horaire
        }

        const annonce = new Annonce(body)
        this.annonceCreee = annonce;
    }

    publierAnnonce() : Observable<Annonce> {
        return this.http.post<Annonce>(`${environment.baseUrl}covoiturage`, this.annonceCreee);
    }

}