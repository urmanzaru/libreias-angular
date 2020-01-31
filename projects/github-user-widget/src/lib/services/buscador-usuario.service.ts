import { Injectable } from '@angular/core';
import * as api from 'proyecto-1b-api-github';
import { UsuarioInterface } from '../interfaces/usuario.interface';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class BuscadorUsuarioService {

  constructor() { }

  obtenerDatosUsuario(usuario: string) {
    return new Promise(function (resolve: any) {
      return api.obtenerDatosDeUsuario(usuario).then(
        (data: UsuarioInterface) => { resolve(data); }
      ).catch((error: any) => {
        resolve(error);
      });
    });
  }

}
