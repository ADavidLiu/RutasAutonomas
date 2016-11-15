import {Component} from "@angular/core";

@Component({
    selector: "registroVehiculo",
    templateUrl: "app/registroVehiculo/registroVehiculo.component.html"
})

export class RegistroVehiculoComponent {
    
    private placa: string;
    private modelo: string;
    private color: string;
    private base64: string;
    
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
            console.log(reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
}