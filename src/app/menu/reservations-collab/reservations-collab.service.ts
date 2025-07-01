import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Covoiturage } from 'src/app/mock/mock-reservations';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class ReservationCollabService {

    covoiturageCourant: Covoiturage;
    private subCovoiturageSelectionne = new Subject<Covoiturage>();
    me: number;


    constructor(private http: HttpClient, private authSrv: AuthService) { }

    recupererCovoiturageCourant(): Covoiturage{
        return this.covoiturageCourant;
    }

    lister(): Observable<Covoiturage[]> {
      this.authSrv.collegueConnecteObs.subscribe(col => this.me = col.id);
      console.log(this.me);
      return this.http.get<Covoiturage[]>(`${environment.baseUrl}covoiturage/annonce-covoiturage?id=${this.me}`);
    }

  }