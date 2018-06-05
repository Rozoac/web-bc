import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NinioService } from '../../services/ninio/ninio.service';
import { PuntajeService } from '../../services/puntaje/puntaje.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-info-ninio',
  templateUrl: './info-ninio.component.html',
  styleUrls: ['./info-ninio.component.css']
})
export class InfoNinioComponent implements OnInit {

  ninio:string;
  infoNinio:any;
  rutinas = [];
  rutinas2 = [];
  rutinas3 = [];

  constructor( public activateRouter: ActivatedRoute, public _ninioService: NinioService, public _puntajeService: PuntajeService, public router: Router
) { 
    this.cargarNinio();
    this.cargarRutinas();
    

  }

  ngOnInit() {
  }

    cargarNinio() {
    this.activateRouter.params.subscribe((resp: any) => {
      this.ninio = resp.id;
        this._ninioService
        .cargarNinio(this.ninio)
        .subscribe((resp: any) => {
          this.infoNinio = resp;
        });
    });
  }
    cargarRutinas() {
        this._puntajeService
        .cargarPuntajeRutina(this.ninio)
        .subscribe((resp: any) => {

          for (let index = 0; index < resp.puntuaciones.length; index++) {
             this.rutinas.push(resp.puntuaciones[index].rutina);
          }
         

        });
    };


    puntaje (ruta:string) {
            this.router.navigate(['/puntaje-ninio', this.ninio, ruta])

    }

}
