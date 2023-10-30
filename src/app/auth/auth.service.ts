import { Injectable } from '@angular/core';
import {Collegue} from './auth.domains';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { of, BehaviorSubject, Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

/**
 * Collègue anonyme.
 *
 */
const COLLEGUE_ANONYME = new Collegue({});

/**
 * Service de gestion de l'authentification.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Flux du collègue connecté. Les abonnés sont notifiés dès qu'une connexion ou une déconnexion a lieu.
   *
   * A l'initialisation, le collègue connecté vaut 'undefined'.
   *
   */
  private collegueConnecteSub: BehaviorSubject<Collegue> = new BehaviorSubject(COLLEGUE_ANONYME);

  constructor(private http: HttpClient) {
  }

  /**
   * Interface Observable du collègue connecté.
   *
   */
  get collegueConnecteObs(): Observable<Collegue> {
    return this.collegueConnecteSub.asObservable();
  }

  /**
   * Service permettant de vérifier si un collegue est authentifié.
   *
   * Une requête HTTP est déclenchée pour récupérer le collègue connecté s'il n'est pas en cache.
   *
   */
  verifierAuthentification(): Observable<Collegue> {
    return this.collegueConnecteSub.getValue().estAnonyme() ?
            this.http.get<Collegue>(`${environment.baseUrl}${environment.apiAuthMe}`, {withCredentials: true})
                  .pipe(
                    map(colServeur => new Collegue(colServeur)),
                    tap(col => this.collegueConnecteSub.next(col)),
                    catchError(err => of(COLLEGUE_ANONYME))
                  ) :     of(this.collegueConnecteSub.getValue())
              ;
  }

  /**
   * Connexion de l'utilisateur.
   *
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   *
   */
  connecter(email: string, mdp: string): Observable<Collegue> {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(`${environment.baseUrl}${environment.apiLogin}`,
      new HttpParams().set('username', email).set('password', mdp), config)
      .pipe(
        map(colServeur => new Collegue(colServeur)),
        tap(col => this.collegueConnecteSub.next(col) )
      );
  }

  /**
   * Déconnexion de l'utilisateur.
   *
   * Le serveur provoque la suppression du cookie AUTH-TOKEN.
   *
   */
  seDeconnecter() {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<Collegue>(`${environment.baseUrl}${environment.apiLogout}`, null , config)
      .pipe(
        tap(col => this.collegueConnecteSub.next(COLLEGUE_ANONYME))
      );
  }
}
