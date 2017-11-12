import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseMySqlProvider {
//api: string = "http://10.0.1.140/checkpointA/";
  api: string = "http://192.168.0.136/checkpointA/";
  
  
  constructor(public http: Http) { }

  getServicios(){
    return this.http.get(this.api+"listarServicios.php").map(res => res.json());
  }

  getValoraciones(){
    return this.http.get(this.api+"listarValoraciones.php").map(res => res.json());
  }

  getUbicaciones(){
    return this.http.get(this.api+"listarUbicaciones.php").map(res => res.json());
  }

  getUbicacionesValoraciones(){
    return this.http.get(this.api+"listarUbicacionesValoraciones.php").map(res => res.json());
  }
  
  getLogs(){
    return this.http.get(this.api+'listarLogs.php').map(res => res.json());
  }

  insertarValoracion(parans){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this.http.post(this.api+'insertval.php',parans,{
                          headers: headers,
                          method: "POST" 
                        }).map(
                          (res:Response)=> {return res.json();}
                        );
  }

}
