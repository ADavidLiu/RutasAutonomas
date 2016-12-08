import {Injectable} from "@angular/core";

import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class RegistroRutaService {
    
    constructor(private _http: Http) {}
    
    registrarRuta(origen, destino, placa, estado) {
        console.log("Origen: " + origen);
        console.log("Destino: " + destino);
        console.log("Placa: " + placa);
        
        let urlRegistroRuta = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        let body = {
            "col": "Ruta",
            "data": {
                "origen": origen,
                "destino": destino,
                "placa": placa,
                "estado": estado
            }
        }
        
        let bodyString = JSON.stringify(body);
        
        return this._http.post(urlRegistroRuta, bodyString, options);
    }
    
    consultarCarros(email) {
        
        console.log("Email: " + email)
        
        let url = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        
        let completa = url + "/Carro/correo/" + email;
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(completa, options);
        
    }
    
}