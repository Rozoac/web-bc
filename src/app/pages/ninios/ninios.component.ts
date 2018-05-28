import { Component, OnInit } from '@angular/core';
import { Ninio } from '../../models/ninio.model';
import { NinioService } from '../../services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ninios',
  templateUrl: './ninios.component.html',
  styles: []
})
export class NiniosComponent implements OnInit {

  // Arreglo de niños
  ninios: Ninio[] = [];
  totalRegistros: 0;
  cargando: boolean = true;

  constructor( public _ninioService: NinioService) {
  }

  ngOnInit() {
    this.cargarNinios();
  }

  cargarNinios() {
    this.cargando = true;
    this._ninioService.cargarNinios()
      .subscribe((resp: any) => {
        console.log(resp);
        this.totalRegistros = resp.total;
        this.ninios = resp.ninios;
        this.cargando = false;

      });
  }

  borrarNinio( ninio: Ninio ) {

    Swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + ninio.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'No, dejarlo'
    })
    .then((result) => {
      if (result.value) {
        this._ninioService.borrarNinio( ninio._id )
          .subscribe( resp => {
              this.cargarNinios();
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'El niño no se a borrado :)',
          'error'
        );
      }
    });
  }

  crearNinios() {

    Swal({
      title: 'Crear Niño',
      text: 'Ingrese el nombre del niño',
      input: 'text',
    }).then(result => {
      if (!result || result.value === '') {
        return;
      }
      this._ninioService.crearNinio(result.value)
        .subscribe(() => this.cargarNinios());
    });

  }

}
