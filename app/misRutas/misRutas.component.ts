import {Component} from "@angular/core";

import {MisRutasService} from "./misRutas.service";

@Component({
    selector: "misRutas",
    templateUrl: "app/misRutas/misRutas.component.html",
    providers: [MisRutasService]
})

export class MisRutasComponent {
    
    constructor(private _misRutasService: MisRutasService) {}
    
    activarRuta() {
        alert("Ruta activada");
    }
    
    desactivarRuta() {
        alert("Ruta desactivada");
    }
    
}