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
var module_1 = require();
"@angular/core";
var http_1 = require("@angular/http");
var BuscarRutaService = (function () {
    function BuscarRutaService(_http) {
        this._http = _http;
    }
    BuscarRutaService.prototype.buscarRutas = function (origen, destino, estado) {
        console.log("Origen: " + origen);
        console.log("Destino: " + destino);
        console.log("Estado: " + estado);
    };
    BuscarRutaService = __decorate([
        module_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BuscarRutaService);
    return BuscarRutaService;
}());
exports.BuscarRutaService = BuscarRutaService;
//# sourceMappingURL=buscarRuta.service.js.map