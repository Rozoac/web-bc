import { Component, OnInit } from '@angular/core';
import { Rutina } from '../../models/rutina.model';
import { RutinaService } from '../../services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styles: []
})
export class RutinasComponent implements OnInit {

  // Arreglo de niños
  rutinas: Rutina[] = [];
  totalRegistros: 0;
  cargando: boolean = true;

  constructor(public _rutinaService: RutinaService) {
  }

  ngOnInit() {
    this.cargarRutinas();
  }

  cargarRutinas() {
    this.cargando = true;
    this._rutinaService.cargarRutinas()
      .subscribe((resp: any) => {
        console.log(resp);
        this.totalRegistros = resp.total;
        this.rutinas = resp.rutinas;
        this.cargando = false;

      });
  }

  borrarRutina(rutina: Rutina) {

    Swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + rutina.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'No, dejarlo'
    })
      .then((result) => {
        if (result.value) {
          this._rutinaService.borrarRutina(rutina._id)
            .subscribe(resp => {
              this.cargarRutinas();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelado',
            'La rutina no se a borrado :)',
            'error'
          );
        }
      });
  }

}
