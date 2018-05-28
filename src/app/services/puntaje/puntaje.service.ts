import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Puntaje } from '../../models/puntaje.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Injectable()
export class PuntajeService {
  puntaje: Puntaje;
  token: string;

  constructor(public http: HttpClient) { }

  cargarPuntajes() {
    const url = URL_SERVICIOS + 'puntuacion';
    return this.http.get(url);
  }

  borrarPuntaje(id: string) {
    let url = URL_SERVICIOS + 'puntuacion/' + id;

    return this.http.delete(url).map(resp => {
      Swal(
        'Eliminado!',
        'El puntaje a sido elimitado correctamente.',
        'success');
      return true;
    });
  }
}
