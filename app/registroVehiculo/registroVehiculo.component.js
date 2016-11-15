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
var RegistroVehiculoComponent = (function () {
    function RegistroVehiculoComponent() {
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
            console.log(reader.result);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    RegistroVehiculoComponent = __decorate([
        core_1.Component({
            selector: "registroVehiculo",
            templateUrl: "app/registroVehiculo/registroVehiculo.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], RegistroVehiculoComponent);
    return RegistroVehiculoComponent;
}());
exports.RegistroVehiculoComponent = RegistroVehiculoComponent;
//# sourceMappingURL=registroVehiculo.component.js.map