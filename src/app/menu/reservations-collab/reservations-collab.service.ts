import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Covoiturage } from 'src/app/mock/mock-reservations';

@Injectable({
    providedIn: 'root'
  })
  export class ReservationCollabService {

    covoiturageCourant: Covoiturage;
    private subCovoiturageSelectionne = new Subject<Covoiturage>();

    constructor(private http: HttpClient) { }

    recupererCovoiturageCourant(): Covoiturage{
        return this.covoiturageCourant;
    }

  }