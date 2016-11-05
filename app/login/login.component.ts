import {Component} from "@angular/core";
import {LoginService} from "./login.service";

let correo: string;
let clave: string;

@Component({
    selector: "login",
    templateUrl: "app/login/login.component.html",
    providers: [LoginService]
})

export class LoginComponent {
    
    constructor(private _loginService: LoginService) {}
    
    obtenerCorreo(e) {
        correo = e.target.value;
    }
    
    obtenerClave(e) {
        clave = e.target.value;
    }
    
    loggear() {
        this._loginService.loggear(correo, clave).subscribe(function(res) {
            console.log(res);
        });
    }
    
}