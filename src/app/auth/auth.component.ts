import { Component, OnInit } from '@angular/core';
import {Collegue} from './auth.domains';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

/**
 * Formulaire d'authentification.
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent implements OnInit {


  collegue: Collegue = new Collegue({});
  err: boolean;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  connecter() {
    this.authSrv.connecter(this.collegue.email, this.collegue.motDePasse)
      .subscribe(
        // en cas de succès, redirection vers la page /tech
        col => this.router.navigate(['/tech']),

        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

}
