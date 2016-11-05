import {Injectable} from "@angular/core";
import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class LoginService {
    
    constructor(private _http: Http) {}
    
    loggear(email, clave) {
        console.log("Email: " + email)
        console.log("Clave: " + clave)
        
        let urlLogin = "http://port-6000.hn5esotchtwqaorb9cwzr6z4lhaorgmn6md92uykwewmi.box.codeanywhere.com/Usuario/nombre" + email;
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        let body = {
            "col": "Usuario",
            "data": {
                "clave": clave,
                "email": email
            }
        }
        
        let bodyString = JSON.stringify(body);
        
        return this._http.post(urlLogin, bodyString, options);
    }
    
}