import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
 

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
    api: string = 'http://192.168.0.136/checkpointA/';
    constructor(public http: Http) {
    }

  getDatos(){
    return this.http.get(this.api+'listserv.php').map(res => res.json());
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
