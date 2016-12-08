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
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var correo;
var clave;
var router;
var rol = "";
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        router = this._router;
    }
    LoginComponent.prototype.obtenerCorreo = function (e) {
        correo = e.target.value;
    };
    LoginComponent.prototype.obtenerClave = function (e) {
        clave = e.target.value;
    };
    LoginComponent.prototype.seleccionarRol = function (e) {
        rol = e;
        console.log(e);
    };
    LoginComponent.prototype.loggear = function () {
        console.log(rol);
        this._loginService.loggear(correo, rol).subscribe(function (res) {
            console.log(res);
            var existe = res.ok;
            var json = JSON.parse(res._body);
            console.log(json);
            var usuario = json.value[0];
            console.log(usuario);
            if (existe) {
                if (usuario.password === clave) {
                    console.log("Rol final: " + rol);
                    if (rol === "conductor") {
                        router.navigate([
                            "/misRutas",
                            {
                                email: correo
                            }
                        ]);
                    }
                    else {
                        router.navigate([
                            "/buscarRuta",
                            {
                                email: correo
                            }
                        ]);
                    }
                }
                else {
                    alert("datos erróneos");
                }
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "app/login/login.component.html",
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map