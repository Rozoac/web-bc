import { Injectable } from '@angular/core';
import { Corporacion } from '../../models/corporacion.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import Swal from "sweetalert2";


@Injectable()
export class CorporacionService {

  totalCorporaciones: number = 0;

  constructor(
    public http: HttpClient,
  ) { }

  cargarCorporaciones() {
    let url = URL_SERVICIOS + 'corporacion';
    return this.http.get(url)
      .map((resp: any) => {
        this.totalCorporaciones = resp.total;
        return resp.corporaciones;
      });
  }

  obtenerCorporacion(id: string) {
    let url = URL_SERVICIOS + 'corporacion/' + id;
    return this.http.get(url)
      .map((resp: any) => resp.corporacion);
  }

  borrarCorporacion(id: string) {
    let url = URL_SERVICIOS + 'corporacion/' + id;
    return this.http.delete(url)
      .map(resp => Swal('Hospital Borrado', 'Eliminado correctamente', 'success'));
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

  crearCorporacion(nombre: string) {
    let url = URL_SERVICIOS + 'corporacion';
    return this.http.post(url, { nombre })
      .map((resp: any) => resp.corporacion);

  }

  actualizarCorporacion(corporacion: Corporacion) {
    let url = URL_SERVICIOS + 'corporacion/' + corporacion._id;
    return this.http.put(url, corporacion)
      .map((resp: any) => {
        Swal('Corporacion Actualizada', corporacion.nombre, 'success');
        return resp.corporacion;
      });

  }


}
