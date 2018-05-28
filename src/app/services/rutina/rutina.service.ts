import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Rutina } from '../../models/rutina.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable()
export class RutinaService {
  rutina: Rutina;

  constructor(public http: HttpClient) { }

  cargarRutinas() {
    const url = URL_SERVICIOS + "rutina";
    return this.http.get(url);
  }

  buscarRutina(termino: string) { }

  borrarRutina(id: string) {
    let url = URL_SERVICIOS + "rutina/" + id;

    return this.http.delete(url).map(resp => {
      Swal(
        'Eliminado!',
        'La rutina a sido eliminada correctamente.',
        'success');
      return true;
    });
  }
}
