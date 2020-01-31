import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BuscadorUsuarioComponent } from './components/buscador-usuario/buscador-usuario.component';
import { CommonModule } from '@angular/common';

const COMPONENT = [UsuarioComponent, BuscadorUsuarioComponent];
@NgModule({
  declarations: COMPONENT,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: COMPONENT
})
export class GithubUserWidgetModule { }
