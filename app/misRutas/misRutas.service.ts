import {Injectable} from "@angular/core";
import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class MisRutasService {
    
    constructor(private _http: Http) {}
    
    consultarRutas(email) {
        
        console.log("Email recibido: " + email);
        
    }
    
}