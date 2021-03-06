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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var login_component_1 = require("./login/login.component");
var registroVehiculo_component_1 = require("./registroVehiculo/registroVehiculo.component");
var buscarRuta_component_1 = require("./buscarRuta/buscarRuta.component");
var registroRuta_component_1 = require("./registroRuta/registroRuta.component");
var misRutas_component_1 = require("./misRutas/misRutas.component");
var ruta_component_1 = require("./ruta/ruta.component");
var registroUsuario_component_1 = require("./registroUsuario/registroUsuario.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                    { path: 'registroVehiculo', component: registroVehiculo_component_1.RegistroVehiculoComponent },
                    { path: 'buscarRuta', component: buscarRuta_component_1.BuscarRutaComponent },
                    { path: "registroRuta", component: registroRuta_component_1.RegistroRutaComponent },
                    { path: "misRutas", component: misRutas_component_1.MisRutasComponent },
                    { path: "registroUsuario", component: registroUsuario_component_1.RegistroUsuarioComponent },
                    { path: '', component: login_component_1.LoginComponent }
                ])
            ],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, registroVehiculo_component_1.RegistroVehiculoComponent, buscarRuta_component_1.BuscarRutaComponent, registroRuta_component_1.RegistroRutaComponent, misRutas_component_1.MisRutasComponent, ruta_component_1.RutaComponent, registroUsuario_component_1.RegistroUsuarioComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map