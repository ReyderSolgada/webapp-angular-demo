import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { UsuarioComponent } from './containers/usuario/usuario.component';
import { UsuarioMantComponent } from './components/usuario-mant/usuario-mant.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetalleComponent } from './containers/usuario-detalle/usuario-detalle.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioMantComponent,
    UsuarioListComponent,
    UsuarioDetalleComponent,
    AppHighlightDirective
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
  ]
})
export class MantenimientoModule { }
