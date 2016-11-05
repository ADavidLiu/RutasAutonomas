declare let google;

import {Component} from "@angular/core";

let directionsService;
let directionsDisplay;
let origen: string;
let destino: string;

@Component({
    selector: "buscarRuta",
    templateUrl: "app/buscarRuta/buscarRuta.component.html"
})

export class BuscarRutaComponent implements OnInit{
    
    ngOnInit() {
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
        calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino);
    }
    
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino, paradas) {
    var waypts = [];
    var checkboxArray:any[] = ['winnipeg', 'regina','calgary'];
            
    for (var i = 0; i < checkboxArray.length; i++) {
        waypts.push({
            location: checkboxArray[i],
            stopover: true
        });
    }
        
    directionsService.route({
        origin: origen,
        destination: destino,
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