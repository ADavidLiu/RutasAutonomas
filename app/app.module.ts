import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes }   from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {RegistroVehiculoComponent} from "./registroVehiculo/registroVehiculo.component";
import {BuscarRutaComponent} from "./buscarRuta/buscarRuta.component";
import {RegistroRutaComponent} from "./registroRuta/registroRuta.component";
import {MisRutasComponent} from "./misRutas/misRutas.component"
import {RutaComponent} from "./ruta/ruta.component";
import {RegistroUsuarioComponent} from "./registroUsuario/registroUsuario.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot([
          { path: 'registroVehiculo', component: RegistroVehiculoComponent },
          { path: 'buscarRuta', component: BuscarRutaComponent },
          { path: "registroRuta", component: RegistroRutaComponent },
          { path: "misRutas", component: MisRutasComponent },
          { path: "registroUsuario", component: RegistroUsuarioComponent },
          { path: '', component: LoginComponent }
        ])
    ],
  declarations: [ AppComponent, LoginComponent, RegistroVehiculoComponent, BuscarRutaComponent, RegistroRutaComponent, MisRutasComponent, RutaComponent, RegistroUsuarioComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
