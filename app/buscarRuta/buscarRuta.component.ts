declare let google;

import {Component} from "@angular/core";

import {RutaComponent} from "../ruta/ruta.component";

let directionsService;
let directionsDisplay;
let origen: string;
let destino: string;
let parada: string;
let paradas:string[] = [];
let template;

@Component({
    selector: "buscarRuta",
    templateUrl: "app/buscarRuta/buscarRuta.component.html"
})

export class BuscarRutaComponent implements OnInit{
    
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
    
    buscarRuta() {
        calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino, paradas);
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