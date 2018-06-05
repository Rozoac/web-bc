import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NinioService } from '../../services/ninio/ninio.service';
import * as moment from 'moment';




@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  constructor(public activateRouter: ActivatedRoute, public _ninioService: NinioService, public router: Router) { 
  }

  public ninio_id: string;
  public rutina_id: string;
  public cargando:boolean = true;
  public puntajes;
  public nombreRutina;

  public lineChartData:Array<any> = [
    {data: [], label: 'Puntaje'},
    {data: [], label: 'Puntaje Bueno'},
    {data: [], label: 'Puntaje Malo'}
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  



  ngOnInit() {
    this.cargarPuntaje();


  }

      cargarPuntaje() {
       this.activateRouter.params.subscribe((resp: any) => {
        this.ninio_id = resp.ninio;
      this.rutina_id = resp.rutina;
        this._ninioService
        .cargarEstadistica(this.ninio_id, this.rutina_id)
        .subscribe((resp: any) => {
          for (let index = 0; index < resp.length; index++) {
          this.lineChartLabels.push(moment(resp[index].fecha).format('DD/MM/YY'));
           this.lineChartData[0].data.push(resp[index].puntuacion);
           this.lineChartData[1].data.push(resp[index].puntajeBueno);
           this.lineChartData[2].data.push(resp[index].puntajeMalo);
          }
          this.puntajes = resp;
          this.nombreRutina = this.puntajes[0].rutina.nombre;
          this.cargando = false; 

          console.log(this.nombreRutina)
          console.log(this.lineChartLabels)
          console.log(resp);          
        });
    });
  }

}
