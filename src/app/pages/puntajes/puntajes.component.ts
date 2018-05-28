import { Component, OnInit } from '@angular/core';
import { Puntaje } from '../../models/puntaje.model';
import { PuntajeService } from '../../services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styles: []
})
export class PuntajesComponent implements OnInit {

  // Arreglo de niños
  puntajes: Puntaje[] = [];
  totalRegistros: 0;
  cargando: boolean = true;

  constructor(public _puntajeService: PuntajeService) {
  }

  ngOnInit() {
    this.cargarPuntajes();
  }

  cargarPuntajes() {
    this.cargando = true;
    this._puntajeService.cargarPuntajes()
      .subscribe((resp: any) => {
        console.log(resp);
        this.totalRegistros = resp.total;
        this.puntajes = resp.puntuaciones;
        this.cargando = false;

      });
  }

  borrarPuntaje(puntaje: Puntaje) {

    Swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + puntaje.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'No, dejarlo'
    })
      .then((result) => {
        if (result.value) {
          this._puntajeService.borrarPuntaje(puntaje._id)
            .subscribe(resp => {
              this.cargarPuntajes();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelado',
            'El puntaje no se a borrado :)',
            'error'
          );
        }
      });
  }

}
