import {Component} from "@angular/core";

import {MisRutasService} from "./misRutas.service";

import {Router, ActivatedRoute} from "@angular/router";

import {Ruta} from "./ruta";

let email: string = "";
let rutas[]: Ruta[];

@Component({
    selector: "misRutas",
    templateUrl: "app/misRutas/misRutas.component.html",
    providers: [MisRutasService]
})

export class MisRutasComponent {
    
    private placaCarro: string;
    private cuposCarro: string;
    private imagenCarro: string;
    private colorCarro: string;
    
    constructor(private _misRutasService: MisRutasService, private _router: Router, private _activatedRoute: ActivatedRoute) {
        
        _activatedRoute.params.subscribe(params => {
            email = params["email"];
            console.log(email):
        });
        
        _misRutasService.consultarCarros(email).subscribe(res => {
            console.log(res);
            let json = JSON.parse(res._body);
            let carro = json.value[0];
            console.log(carro);
            this.placaCarro = carro.placa;
            this.cuposCarro = carro.cupos;
            this.imagenCarro = carro.imagen;
            this.colorCarro = carro.color;
            $("#imagenCarro").attr("src", this.imagenCarro);
            
            
            _misRutasService.consultarRutas(this.placaCarro).subscribe(res => {
                console.log(res);
                let json = JSON.parse(res._body);
                console.log(json);
                
                for (let i = 0; i < json.value.length; i++) {
                    let ruta = new Ruta(json.value[i].origen, json.value[i].destino, json.value[i].estado);
                    rutas.push(ruta);
                    $(".misRutasLista").append("<li>" + JSON.stringify(ruta) + "</li>");
                }
                
                console.log(rutas);
                
            });
        });
        
    }

    irRegistroRuta() {
        this._router.navigate([
                "/registroRuta",
            {
                email: email
            }
        ]);
    }

    irRegistroVehiculo() {
        this._router.navigate([
                "/registroVehiculo",
            {
                email: email
            }
        ]);
    }
    
    activarRuta() {
        alert("Ruta activada");
    }
    
    desactivarRuta() {
        alert("Ruta desactivada");
    }
    
}