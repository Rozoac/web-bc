import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { NiniosComponent } from './ninios/ninios.component';
import { CoorporacionesComponent } from './coorporaciones/coorporaciones.component';
import { PuntajesComponent } from './puntajes/puntajes.component';
// Guardias
import { LoginGuardGuard } from '../services/guards/login-guard.guard';


const pagesRoutes: Routes = [
    {
        path: '',
      component: PagesComponent,
      canActivate: [LoginGuardGuard],
      children: [
          { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' }},
          { path: 'rutinas', component: RutinasComponent, data: { titulo: 'Rutinas' }},
          { path: 'ninios', component: NiniosComponent, data: { titulo: 'Niños' }},
          { path: 'coorporaciones', component: CoorporacionesComponent, data: { titulo: 'Coorporaciones' }},
          { path: 'puntajes', component: PuntajesComponent, data: { titulo: 'Puntajes' }},
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]},
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
