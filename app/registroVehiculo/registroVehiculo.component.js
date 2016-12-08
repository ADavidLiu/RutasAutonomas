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
var registroVehiculo_service_1 = require("./registroVehiculo.service");
var base64;
var RegistroVehiculoComponent = (function () {
    function RegistroVehiculoComponent(_registroVehiculoService) {
        this._registroVehiculoService = _registroVehiculoService;
        this.cupos = 1;
    }
    RegistroVehiculoComponent.prototype.obtenerPlaca = function (e) {
        this.placa = e.target.value;
        console.log("Placa: " + this.placa);
    };
    RegistroVehiculoComponent.prototype.obtenerModelo = function (e) {
        this.modelo = e.target.value;
        console.log("Modelo: " + this.modelo);
    };
    RegistroVehiculoComponent.prototype.obtenerColor = function (e) {
        this.color = e.target.value;
        console.log("Color: " + this.color);
    };
    RegistroVehiculoComponent.prototype.obtenerImagenVehiculo = function () {
        var preview = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            preview.src = reader.result;
            base64 = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    RegistroVehiculoComponent.prototype.obtenerCupos = function (valor) {
        this.cupos = valor;
        console.log(this.cupos);
    };
    RegistroVehiculoComponent.prototype.registrar = function () {
        this._registroVehiculoService.registrarVehiculo(this.placa, this.modelo, this.color, this.cupos, base64, "emailprueba@mail.com").subscribe(function (res) {
            console.log(res);
        });
    };
    RegistroVehiculoComponent = __decorate([
        core_1.Component({
            selector: "registroVehiculo",
            templateUrl: "app/registroVehiculo/registroVehiculo.component.html",
            providers: [registroVehiculo_service_1.RegistroVehiculoService]
        }), 
        __metadata('design:paramtypes', [registroVehiculo_service_1.RegistroVehiculoService])
    ], RegistroVehiculoComponent);
    return RegistroVehiculoComponent;
}());
exports.RegistroVehiculoComponent = RegistroVehiculoComponent;
//# sourceMappingURL=registroVehiculo.component.js.map