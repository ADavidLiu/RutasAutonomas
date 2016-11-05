import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from "@angular/http";
import { RouterModule }   from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {RegistroVehiculoComponent} from "./registroVehiculo/registroVehiculo.component";
import {BuscarRutaComponent} from "./buscarRuta/buscarRuta.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot([
          { path: 'registroVehiculo', component: RegistroVehiculoComponent },
          { path: 'buscarRuta', component: BuscarRutaComponent },
          { path: '', component: LoginComponent }
        ])
    ],
  declarations: [ AppComponent, LoginComponent, RegistroVehiculoComponent, BuscarRutaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
