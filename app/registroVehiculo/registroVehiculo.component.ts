import {Component} from "@angular/core";
import {RegistroVehiculoService} from "./registroVehiculo.service";

let base64: string;

@Component({
    selector: "registroVehiculo",
    templateUrl: "app/registroVehiculo/registroVehiculo.component.html",
    providers: [RegistroVehiculoService]
})

export class RegistroVehiculoComponent {
    
    private placa: string;
    private modelo: string;
    private color: string;
    
    private cupos: int = 1;

    constructor(private _registroVehiculoService: RegistroVehiculoService) {}
    
    obtenerPlaca(e) {
        this.placa = e.target.value;
        console.log("Placa: " + this.placa);
    }

    obtenerModelo(e) {
        this.modelo = e.target.value;
        console.log("Modelo: " + this.modelo);
    }

    obtenerColor(e) {
        this.color = e.target.value;
        console.log("Color: " + this.color);
    }

    obtenerImagenVehiculo() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
            preview.src = reader.result;
            base64 = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    obtenerCupos(valor) {
        this.cupos = valor;
        console.log(this.cupos);
    }

    registrar() {
        this._registroVehiculoService.registrarVehiculo(this.placa, this.modelo, this.color, this.cupos, base64, "emailprueba@mail.com").subscribe(res => {
            console.log(res);
        });
    }
    
}