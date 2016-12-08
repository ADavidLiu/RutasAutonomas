declare let google;

import {Component} from "@angular/core";

import {RutaComponent} from "../ruta/ruta.component";

import {Http, Header, RequestOptions} from "@angular/http";

let directionsService;
let directionsDisplay;
let origen: string;
let destino: string;
let parada: string;
let paradas:string[] = [];
let template;

let rutas[];

@Component({
    selector: "buscarRuta",
    templateUrl: "app/buscarRuta/buscarRuta.component.html"
})

export class BuscarRutaComponent implements OnInit{
    
    constructor(private _http: Http) {}
    
    ngOnInit() {
        template = $(".parada-wrapper").html();
        
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer;
        
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 3.420556, lng: -76.522222} // Cali
        });
        
        directionsDisplay.setMap(map);
    }
    
    obtenerOrigen(e) {
        origen = e.target.value;
    }
    
    obtenerDestino(e) {
        destino = e.target.value;
    }
    
    obtenerParada(e) {
        parada = e.target.value;
    }
    
    agregarParada() {
        paradas.push(parada);
        console.log(paradas);
        $(".parada-wrapper").append(template);
        //$(".buscarRuta__input--parada").last().val("");
    }
    
    escogerOrigen(valor) {
        console.log(valor);
        origen = valor;
    }
    
    escogerDestino(valor) {
        console.log(valor);
        destino = valor;
    }
    
    buscarRuta() {
        calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino, paradas);
        
        let url = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com/Ruta";
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        this._http.get(url, options).subscribe(res => {
            console.log(res);
            let json = JSON.parse(res._body);
            console.log(json);
            for (let i = 0; i < json.value.length; i++) {
                let ruta = json.value[i];
                rutas.push(ruta);
                $(".rutasLista").append("<li>" + JSON.stringify(ruta) + "</li>");
            }
            console.log(rutas);
        });
    }
    
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino, paradas) {
    var waypts = [];
            
    for (var i = 0; i < paradas.length; i++) {
        waypts.push({
            location: paradas[i],
            stopover: true
        });
    }
        
    directionsService.route({
        origin: origen,
        destination: destino,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


























