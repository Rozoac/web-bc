import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard, NinioService, CorporacionService, PuntajeService, RutinaService} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    NinioService,
    CorporacionService,
    PuntajeService,
    RutinaService
  ],
  declarations: []
})
export class ServiceModule {}
