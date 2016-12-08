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
var RegistroVehiculoService = (function () {
    function RegistroVehiculoService(_http) {
        this._http = _http;
    }
    RegistroVehiculoService.prototype.registrarVehiculo = function (placa, modelo, color, cupo, imagen, email) {
        console.log("Placa: " + placa);
        console.log("Modelo: " + modelo);
        console.log("Color: " + color);
        console.log("Cupo: " + cupo);
        console.log("Email: " + email);
        console.log("Imagen: " + imagen);
        var urlRegistroVehiculo = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = {
            "col": "Carro",
            "data": {
                "placa": placa,
                "correo": email,
                "modelo": modelo,
                "color": color,
                "imagen": imagen,
                "cupos": cupo
            }
        };
        var bodyString = JSON.stringify(body);
        return this._http.post(urlRegistroVehiculo, bodyString, options);
    };
    RegistroVehiculoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegistroVehiculoService);
    return RegistroVehiculoService;
}());
exports.RegistroVehiculoService = RegistroVehiculoService;
//# sourceMappingURL=registroVehiculo.service.js.map