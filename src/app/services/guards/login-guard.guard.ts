import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate {


  constructor(public _usuarioService: UsuarioService, public router: Router)  {}

  canActivate() {

    let token = localStorage.getItem('token');

    if (token !== null) {
      return true;
    } else {

      this.router.navigate(['/login']);
      return false;
    }

  }
}
