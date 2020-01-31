import { Component } from '@angular/core';

@Component({
  selector: 'guw-buscador-usuario',
  templateUrl: './buscador-usuario.component.html',
  styles: []
})
export class BuscadorUsuarioComponent {
  textoBusqueda = '';
  buscando: boolean;

  buscar(key: any){
    console.log('key: ', key);
    if(key.keyCode === 13){
      this.buscando = true;
    } else{
      this.buscando = false;
    }
  }
}
