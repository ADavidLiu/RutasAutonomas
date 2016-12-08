import {Injectable} frmo "@angular/core";

import {Http, Header, RequestOptions} from "@angular/http";

@Injectable()

export class BuscarRutaService {
    
    constructor(private _http: Http) {}
    
    buscarRutas(origen, destino, estado) {
        
        console.log("Origen: " + origen);
        console.log("Destino: " + destino);
        console.log("Estado: " + estado);
        
    }
    
}