import {Component} from "@angular/core";

@Component({
    selector: "registroRuta",
    templateUrl: "app/registroRuta/registroRuta.component.html"
})

export class RegistroRutaComponent {
    private origen: string;
    private destino: string;
    private vehiculo: string;

    escogerOrigen(lugar) {
        this.origen = lugar;
        console.log(this.origen);
    }

    escogerDestino(lugar) {
        this.destino = lugar;
        console.log(this.destino);
    }

    escogerVehiculo(vehic) {
        this.vehiculo = vehic;
        console.log(this.vehiculo);
    }
}