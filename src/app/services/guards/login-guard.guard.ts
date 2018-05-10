import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate {


  constructor(public _usuarioService: UsuarioService, public router: Router)  {}

  canActivate() {

    if (this._usuarioService.estaLogueado()) {
      console.log('Paso por el login guard ');
      return true;
    } else {
      console.log('Bloquedo por el guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
