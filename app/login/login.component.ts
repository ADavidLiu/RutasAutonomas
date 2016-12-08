import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

let correo: string;
let clave: string;
let router;
let rol: string = "";

@Component({
    selector: "login",
    templateUrl: "app/login/login.component.html",
    providers: [LoginService]
})

export class LoginComponent {
    
    constructor(private _loginService: LoginService, private _router: Router) {
        router = this._router;
    }
    
    obtenerCorreo(e) {
        correo = e.target.value;
    }
    
    obtenerClave(e) {
        clave = e.target.value;
    }

    seleccionarRol(e) {
        rol = e;
        console.log(e);
    }
    
    loggear() {
        console.log(rol);
        this._loginService.loggear(correo, rol).subscribe(function(res) {
            console.log(res);
            let existe = res.ok;
            
            let json = JSON.parse(res._body);
            console.log(json);
            
            let usuario = json.value[0];
            
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
                    } else {
                        router.navigate([
                            "/buscarRuta",
                            {
                                email: correo
                            }
                        ]);
                    }
                } else {
                    alert("datos erróneos");
                }
            }
        });
    }
    
}