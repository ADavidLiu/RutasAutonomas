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
var RegistroRutaService = (function () {
    function RegistroRutaService(_http) {
        this._http = _http;
    }
    RegistroRutaService.prototype.registrarRuta = function (origen, destino, placa, estado) {
        console.log("Origen: " + origen);
        console.log("Destino: " + destino);
        console.log("Placa: " + placa);
        var urlRegistroRuta = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = {
            "col": "Ruta",
            "data": {
                "origen": origen,
                "destino": destino,
                "placa": placa,
                "estado": estado
            }
        };
        var bodyString = JSON.stringify(body);
        return this._http.post(urlRegistroRuta, bodyString, options);
    };
    RegistroRutaService.prototype.consultarCarros = function (email) {
        console.log("Email: " + email);
        var url = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        var completa = url + "/Carro/correo/" + email;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completa, options);
    };
    RegistroRutaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegistroRutaService);
    return RegistroRutaService;
}());
exports.RegistroRutaService = RegistroRutaService;
//# sourceMappingURL=registroRuta.service.js.map