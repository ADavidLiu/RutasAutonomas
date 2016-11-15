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
var misRutas_service_1 = require("./misRutas.service");
var MisRutasComponent = (function () {
    function MisRutasComponent(_misRutasService) {
        this._misRutasService = _misRutasService;
    }
    MisRutasComponent.prototype.activarRuta = function () {
        alert("Ruta activada");
    };
    MisRutasComponent.prototype.desactivarRuta = function () {
        alert("Ruta desactivada");
    };
    MisRutasComponent = __decorate([
        core_1.Component({
            selector: "misRutas",
            templateUrl: "app/misRutas/misRutas.component.html",
            providers: [misRutas_service_1.MisRutasService]
        }), 
        __metadata('design:paramtypes', [misRutas_service_1.MisRutasService])
    ], MisRutasComponent);
    return MisRutasComponent;
}());
exports.MisRutasComponent = MisRutasComponent;
//# sourceMappingURL=misRutas.component.js.map