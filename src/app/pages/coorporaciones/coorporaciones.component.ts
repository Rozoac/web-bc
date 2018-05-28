import { Component, OnInit } from '@angular/core';
import { CorporacionService } from '../../services/service.index';
import { Corporacion } from '../../models/corporacion.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-coorporaciones',
  templateUrl: './coorporaciones.component.html',
  styles: []
})
export class CoorporacionesComponent implements OnInit {

  corporaciones: Corporacion[] = [];

  constructor(
    public _corporacionService: CorporacionService,
    // public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarCorporaciones();

    // this._modalUploadService.notificacion
    //   .subscribe(() => this.cargarHospitales());
  }


  cargarCorporaciones() {
    this._corporacionService
      .cargarCorporaciones()
      .subscribe(corporaciones => (this.corporaciones = corporaciones));
  }


  guardarCorporacion(corporacion: Corporacion) {

    this._corporacionService.actualizarCorporacion(corporacion)
      .subscribe();

  }

  borrarCorporacion(corporacion: Corporacion) {

    Swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a la corporacion ' + corporacion.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'No, dejarlo'
    })
      .then((result) => {
        if (result.value) {
          this._corporacionService.borrarCorporacion(corporacion._id)
            .subscribe(resp => {
              this.cargarCorporaciones();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelado',
            'La corporacion no se a borrado :)',
            'error'
          );
        }
      });
  }

  crearCorporacion() {

    Swal({
      title: 'Crear Corporacion',
      text: 'Ingrese el nombre de la corporación',
      input: 'text',
      }).then(result => {
        if (!result || result.value === '' ) {
          return;
        }
        this._corporacionService.crearCorporacion(result.value)
          .subscribe(() => this.cargarCorporaciones());
      });

  }
}
