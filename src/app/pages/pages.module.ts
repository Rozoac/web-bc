import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";



// PAGES ROUTE
import { PAGES_ROUTES } from './pages.routes';
// COMPONENTES

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { NiniosComponent } from './ninios/ninios.component';
import { CoorporacionesComponent } from './coorporaciones/coorporaciones.component';
import { PuntajesComponent } from './puntajes/puntajes.component';

// SERVICIOS


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent,
    RutinasComponent,
    NiniosComponent,
    CoorporacionesComponent,
    PuntajesComponent
  ],
  exports: [DashboardComponent, ProgressComponent, PagesComponent],
  imports: [SharedModule, CommonModule, PAGES_ROUTES, FormsModule]
})
export class PagesModule {}
