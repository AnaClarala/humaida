import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../annonces.domains';

@Injectable({
    providedIn: 'root'
})


export class ListeAnnoncesCollabService {
    annonceCourante: Annonce;
    constructor(private http: HttpClient) { }

    recupererAnnonceCourante(): Annonce{
        return this.annonceCourante;
    }

}