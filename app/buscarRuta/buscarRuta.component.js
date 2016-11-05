"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var directionsService;
var directionsDisplay;
var origen;
var destino;
var BuscarRutaComponent = (function () {
    function BuscarRutaComponent() {
    }
    BuscarRutaComponent.prototype.ngOnInit = function () {
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat: 3.420556, lng: -76.522222 } // Cali
        });
        directionsDisplay.setMap(map);
    };
    BuscarRutaComponent.prototype.obtenerOrigen = function (e) {
        origen = e.target.value;
    };
    BuscarRutaComponent.prototype.obtenerDestino = function (e) {
        destino = e.target.value;
    };
    BuscarRutaComponent.prototype.buscarRuta = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino);
    };
    BuscarRutaComponent = __decorate([
        core_1.Component({
            selector: "buscarRuta",
            templateUrl: "app/buscarRuta/buscarRuta.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], BuscarRutaComponent);
    return BuscarRutaComponent;
}());
exports.BuscarRutaComponent = BuscarRutaComponent;
function calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino, paradas) {
    var waypts = [];
    var checkboxArray = ['winnipeg', 'regina', 'calgary'];
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
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        }
        else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
//# sourceMappingURL=buscarRuta.component.js.map