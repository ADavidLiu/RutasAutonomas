import {Component} from "@angular/core";

@Component({
    selector: "ruta",
    templateUrl: "app/ruta/ruta.component.html"
})

export class RutaComponent {
    
    private conductor: stirng;
    private placa: string;
    private imagen: string;

    constructor() {
        this.conductor = "Lorem ipsum";
        this.placa = "VHFG123";
    }

    reservarCupo() {
        alert("Cupo reservado!");
    }
    
}