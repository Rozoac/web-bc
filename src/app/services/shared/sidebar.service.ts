import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'}
      ]

    },
    {
      titulo: 'Rutinas',
      icono: 'mdi mdi-play',
      submenu: [
        {titulo: 'Ver', url: '/rutinas'},
      ]

    },
    {
      titulo: 'Niños',
      icono: 'mdi mdi-human-child',
      submenu: [
        {titulo: 'Ver', url: '/ninios'},
      ]

    },
    {
      titulo: 'Corporaciones',
      icono: 'mdi mdi-home-variant',
      submenu: [
        {titulo: 'Ver', url: '/coorporaciones'},
      ]

    },
    {
      titulo: 'Puntajes',
      icono: 'mdi mdi-table',
      submenu: [
        {titulo: 'Ver', url: '/puntajes'},
      ]

    },
  ];

  constructor() { }

}
