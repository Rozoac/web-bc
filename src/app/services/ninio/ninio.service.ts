import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Ninio } from '../../models/ninio.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable()
export class NinioService {
  ninio: Ninio;
  token: string;

  constructor(public http: HttpClient) {}

  cargarNinios() {
    const url = URL_SERVICIOS + "ninio";
    return this.http.get(url);
  }
  cargarNinio(id:string) {
    const url = URL_SERVICIOS + `ninio/${id}`;
    return this.http.get(url);
  }

  crearNinio(nombre: string) {
    let url = URL_SERVICIOS + 'ninio';
    return this.http.post(url, { nombre })
      .map((resp: any) => resp.ninio);

  }

  buscarNinios(termino: string) {}


  cargarEstadistica(ninio:string, rutina:string){
    const url = URL_SERVICIOS + `puntuacion/${ninio}/${rutina}`;
    return this.http.get(url).map((res:any) => res.puntuaciones);
  }

  borrarNinio(id: string) {
    let url = URL_SERVICIOS + "ninio/" + id;

    return this.http.delete(url).map(resp => {
      Swal(
        'Eliminado!',
        'El niño a sido elimitado correctamente.',
        'success');
        return true;
    });
  }
}
