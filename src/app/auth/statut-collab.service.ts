import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

/**
 * Service utilisé par le routeur pour savoir si l'utilisateur a le statut collab.
 *
 * Dans le cas contraire, il est redirigé vers la page d'accueil de son statut.
 */
@Injectable({
  providedIn: 'root'
})
export class StatutCollabService implements CanActivate{

  constructor(private _authSrv: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this._authSrv.statutCollab;
  }

}