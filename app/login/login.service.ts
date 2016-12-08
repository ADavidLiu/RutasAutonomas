import {Injectable} from "@angular/core";
import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class LoginService {
    
    constructor(private _http: Http) {}
    
    loggear(email, rol) {
        console.log("Email: " + email)
        
        let urlLogin = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        
        if (rol === "conductor") {
            let completa = urlLogin + "/Conductores/correo/" + email;
        } else {
            let completa = urlLogin + "/Pasajero/correo/" + email;
        }
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(completa, options);
    }
    
}