import {Component} from "@angular/core";

import {RegistroRutaService} from "./registroRuta.service";

import {Router, ActivatedRoute} from "@angular/router";

let email: string = "";
let router;

@Component({
    selector: "registroRuta",
    templateUrl: "app/registroRuta/registroRuta.component.html",
    providers: [RegistroRutaService]
})

export class RegistroRutaComponent {
    private origen: string;
    private destino: string;
    private vehiculo: string;
    private placas[]: string[];
    private placa: string;
    private estado: boolean = true;

    constructor(private _registroRutaService: RegistroRutaService, private _router: Router, private _activatedRoute: ActivatedRoute) {
        router = _router;
        
        _activatedRoute.params.subscribe(params => {
            email = params["email"];
            console.log(email):
        });
        
        _registroRutaService.consultarCarros(email).subscribe(res => {
            console.log(res);
            let json = JSON.parse(res._body);
            console.log(json);
            let ruta = json.value[0];
            console.log(ruta);
            this.placa = ruta.placa;
            this.placas.push(this.placa);
        });
    }

    escogerOrigen(lugar) {
        this.origen = lugar;
    }

    escogerDestino(lugar) {
        this.destino = lugar;
    }

    escogerVehiculo(vehic) {
        this.vehiculo = vehic;
        
    }

    registrar() {
        this._registroRutaService.registrarRuta(this.origen, this.destino, this.placa, this.estado).subscribe(res => {
            console.log(res);
            
            router.navigate([
                "/misRutas",
                {
                    email: email
                }
            ]);
        });
    }
}