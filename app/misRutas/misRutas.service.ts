import {Injectable} from "@angular/core";
import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class MisRutasService {
    
    constructor(private _http: Http) {}
    
    consultarCarros(email) {
        
        console.log("Email: " + email)
        
        let url = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        
        let completa = url + "/Carro/correo/" + email;
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(completa, options);
        
    }
    
    consultarRutas(placa) {
        
        console.log("Placa: " + placa)
        
        let url = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        
        let completa = url + "/Ruta/placa/" + placa;
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(completa, options);
        
    }
    
}