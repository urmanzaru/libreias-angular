# Libreria github user widget

Muestra la información de un usuario de github haciendo uso de la libreria de la api, su desarrollo es en angular

## Instruccion

Intrucciones

## Instalacion
```npm install github-user-widget```

## Configuración
En el app.module.ts (por defecto) tenemos que importar el modulo de la libreria **"GithubUserWidgetModule"**

```
import { GithubUserWidgetModule } from 'github-user-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Añadir estilos
```@import './../node_modules/github-user-widget/lib/styles/styles.css';```
### Uso
*Con buscador
<guw-buscador-usuario></guw-buscador-usuario>
*Sin buscador
<guw-usuario [busqueda]="'usuario_a_buscar'"></guw-usuario>
