import { Component } from '@angular/core';

import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registroVehiculo/registroVehiculo.component";
import {BuscarRutaComponent} from "./buscarRuta/buscarRuta.component";
import {RegistroRutaComponent} from "./registroRuta/registroRuta.component";
import {MisRutasComponent} from "./misRutas/misRutas.component";
import {RegistroUsuarioComponent} from "./registroUsuario/registroUsuario.component";

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html"
})
export class AppComponent { }
