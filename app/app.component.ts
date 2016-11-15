import { Component } from '@angular/core';

import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registroVehiculo/registroVehiculo.component";
import {BuscarRutaComponent} from "./buscarRuta/buscarRuta.component";
import {RegistroRutaComponent} from "./registroRuta/registroRuta.component";
import {MisRutas} from "./misRutas/misRutas.component";

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html"
})
export class AppComponent { }
