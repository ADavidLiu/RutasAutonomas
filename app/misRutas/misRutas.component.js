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
var router_1 = require("@angular/router");
var ruta_1 = require("./ruta");
var email = "";
var rutas = [], Ruta = [];
var MisRutasComponent = (function () {
    function MisRutasComponent(_misRutasService, _router, _activatedRoute) {
        var _this = this;
        this._misRutasService = _misRutasService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        _activatedRoute.params.subscribe(function (params) {
            email = params["email"];
            console.log(email);
        });
        _misRutasService.consultarCarros(email).subscribe(function (res) {
            console.log(res);
            var json = JSON.parse(res._body);
            var carro = json.value[0];
            console.log(carro);
            _this.placaCarro = carro.placa;
            _this.cuposCarro = carro.cupos;
            _this.imagenCarro = carro.imagen;
            _this.colorCarro = carro.color;
            $("#imagenCarro").attr("src", _this.imagenCarro);
            _misRutasService.consultarRutas(_this.placaCarro).subscribe(function (res) {
                console.log(res);
                var json = JSON.parse(res._body);
                console.log(json);
                for (var i = 0; i < json.value.length; i++) {
                    var ruta = new ruta_1.Ruta(json.value[i].origen, json.value[i].destino, json.value[i].estado);
                    rutas.push(ruta);
                    $(".misRutasLista").append("<li>" + JSON.stringify(ruta) + "</li>");
                }
                console.log(rutas);
            });
        });
    }
    MisRutasComponent.prototype.irRegistroRuta = function () {
        this._router.navigate([
            "/registroRuta",
            {
                email: email
            }
        ]);
    };
    MisRutasComponent.prototype.irRegistroVehiculo = function () {
        this._router.navigate([
            "/registroVehiculo",
            {
                email: email
            }
        ]);
    };
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
        __metadata('design:paramtypes', [misRutas_service_1.MisRutasService, router_1.Router, router_1.ActivatedRoute])
    ], MisRutasComponent);
    return MisRutasComponent;
}());
exports.MisRutasComponent = MisRutasComponent;
//# sourceMappingURL=misRutas.component.js.map