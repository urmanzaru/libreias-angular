import { BuscadorUsuarioService } from './../../services/buscador-usuario.service';
import { USUARIOAPI } from './../../constants/usuario';
import { UsuarioInterface } from './../../interfaces/usuario.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'guw-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  @Input() busqueda: string;
  usuario: UsuarioInterface;
  constructor(private buscadorServicio: BuscadorUsuarioService) { }

  ngOnInit() {
    if (this.busqueda === undefined || this.busqueda === null || this.busqueda === '') {
      this.usuario = USUARIOAPI;
    } else {
      this.buscadorServicio.obtenerDatosUsuario(this.busqueda).then((data: any) => {
        this.usuario = data;
      });
    }

  }

}
