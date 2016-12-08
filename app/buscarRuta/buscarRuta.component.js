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
var http_1 = require("@angular/http");
var directionsService;
var directionsDisplay;
var origen;
var destino;
var parada;
var paradas = [];
var template;
var rutas = [];
var BuscarRutaComponent = (function () {
    function BuscarRutaComponent(_http) {
        this._http = _http;
    }
    BuscarRutaComponent.prototype.ngOnInit = function () {
        template = $(".parada-wrapper").html();
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
    BuscarRutaComponent.prototype.obtenerParada = function (e) {
        parada = e.target.value;
    };
    BuscarRutaComponent.prototype.agregarParada = function () {
        paradas.push(parada);
        console.log(paradas);
        $(".parada-wrapper").append(template);
        //$(".buscarRuta__input--parada").last().val("");
    };
    BuscarRutaComponent.prototype.escogerOrigen = function (valor) {
        console.log(valor);
        origen = valor;
    };
    BuscarRutaComponent.prototype.escogerDestino = function (valor) {
        console.log(valor);
        destino = valor;
    };
    BuscarRutaComponent.prototype.buscarRuta = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino, paradas);
        var url = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com/Ruta";
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.get(url, options).subscribe(function (res) {
            console.log(res);
            var json = JSON.parse(res._body);
            console.log(json);
            for (var i = 0; i < json.value.length; i++) {
                var ruta = json.value[i];
                rutas.push(ruta);
                $(".rutasLista").append("<li>" + JSON.stringify(ruta) + "</li>");
            }
            console.log(rutas);
        });
    };
    BuscarRutaComponent = __decorate([
        core_1.Component({
            selector: "buscarRuta",
            templateUrl: "app/buscarRuta/buscarRuta.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BuscarRutaComponent);
    return BuscarRutaComponent;
}());
exports.BuscarRutaComponent = BuscarRutaComponent;
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