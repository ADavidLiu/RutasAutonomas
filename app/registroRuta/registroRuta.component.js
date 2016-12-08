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
var registroRuta_service_1 = require("./registroRuta.service");
var router_1 = require("@angular/router");
var email = "";
var router;
var RegistroRutaComponent = (function () {
    function RegistroRutaComponent(_registroRutaService, _router, _activatedRoute) {
        var _this = this;
        this._registroRutaService = _registroRutaService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.placas = [];
        this.string = [];
        this.estado = true;
        router = _router;
        _activatedRoute.params.subscribe(function (params) {
            email = params["email"];
            console.log(email);
        });
        _registroRutaService.consultarCarros(email).subscribe(function (res) {
            console.log(res);
            var json = JSON.parse(res._body);
            console.log(json);
            var ruta = json.value[0];
            console.log(ruta);
            _this.placa = ruta.placa;
            _this.placas.push(_this.placa);
        });
    }
    RegistroRutaComponent.prototype.escogerOrigen = function (lugar) {
        this.origen = lugar;
    };
    RegistroRutaComponent.prototype.escogerDestino = function (lugar) {
        this.destino = lugar;
    };
    RegistroRutaComponent.prototype.escogerVehiculo = function (vehic) {
        this.vehiculo = vehic;
    };
    RegistroRutaComponent.prototype.registrar = function () {
        this._registroRutaService.registrarRuta(this.origen, this.destino, this.placa, this.estado).subscribe(function (res) {
            console.log(res);
            router.navigate([
                "/misRutas",
                {
                    email: email
                }
            ]);
        });
    };
    RegistroRutaComponent = __decorate([
        core_1.Component({
            selector: "registroRuta",
            templateUrl: "app/registroRuta/registroRuta.component.html",
            providers: [registroRuta_service_1.RegistroRutaService]
        }), 
        __metadata('design:paramtypes', [registroRuta_service_1.RegistroRutaService, router_1.Router, router_1.ActivatedRoute])
    ], RegistroRutaComponent);
    return RegistroRutaComponent;
}());
exports.RegistroRutaComponent = RegistroRutaComponent;
//# sourceMappingURL=registroRuta.component.js.map