import {Injectable} from "@angular/core";
import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class RegistroVehiculoService {
    
    constructor(private _http: Http) {}
    
    registrarVehiculo(placa, modelo, color, cupo, imagen, email) {
        console.log("Placa: " + placa);
        console.log("Modelo: " + modelo);
        console.log("Color: " + color);
        console.log("Cupo: " + cupo);
        console.log("Email: " + email);
        console.log("Imagen: " + imagen);
        
        let urlRegistroVehiculo = "https://46b1bef9fb5daf7f51791862ee5b31df-nodejs.codepicnic.com";
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        let body = {
            "col": "Carro",
            "data": {
                "placa": placa,
                "correo": email,
                "modelo": modelo,
                "color": color,
                "imagen": imagen,
                "cupos": cupo
            }
        }
        
        let bodyString = JSON.stringify(body);
        
        return this._http.post(urlRegistroVehiculo, bodyString, options);
    }
    
}