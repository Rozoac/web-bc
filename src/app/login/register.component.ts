import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/service.index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  // registrarUsuario(){

    

  // }

}
