import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { DatabaseMySqlProvider } from '../../providers/database-my-sql/database-my-sql';


@Injectable()
export class DatabaseProvider {

  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  servicios: Array<any>;
  valoraciones: Array<any>;
  ubicaciones: Array<any>;
  ubicacionesValoraciones: Array<any>;
  logs: Array<any>;

  constructor(public sqlitePorter: SQLitePorter,
              public databaseMySqlProvider: DatabaseMySqlProvider, 
              public storage: Storage, 
              public sqlite: SQLite, 
              public platform: Platform, 
              public http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite=new SQLite();
      this.sqlite.create({
        name: 'SQLiteData.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }

  fillDatabase() {
    this.http.get('assets/SQLiteDatos.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }
 
  setServicios(servicios: Array<any>) {
    var data
    for (var i = 0; i < servicios.length; i++){
      data = this.database.executeSql("INSERT INTO servicios (idservicio, nombreservicio, iconoservicio)"
                              +" VALUES (?, ?, ?)", [servicios[i].idservicio,
                                                     servicios[i].nombreservicio,
                                                     servicios[i].iconoservicio]);
    }
    return data;
  }

  setValoraciones(valoraciones: Array<any>) {
    var data;
    for(var i=0;i<valoraciones.length;i++){
      data = this.database.executeSql("INSERT INTO valoraciones (idvaloracion, nombrevaloracion,"
                                                           +" descripcion, foto, email, servicio)"
                                      +" VALUES (?, ?, ?, ?, ?, ?)", [valoraciones[i].idvaloracion, 
                                                                      valoraciones[i].nombrevaloracion, 
                                                                      valoraciones[i].descripcion, 
                                                                      valoraciones[i].foto,
                                                                      valoraciones[i].email,
                                                                      valoraciones[i].servicio]);
    }
    return data;
  }

  setUbicaciones(ubicaciones: Array<any>) {
    var data;
    for(var i=0;i<ubicaciones.length;i++){
      data = this.database.executeSql("INSERT INTO ubicaciones (idubicacion, codigoqr,"
                                                           +" nombreubicacion, ubicacion)"
                                     +" VALUES (?, ?, ?, ?)", [ubicaciones[i].idubicacion, 
                                                               ubicaciones[i].codigoqr, 
                                                               ubicaciones[i].nombreubicacion, 
                                                               ubicaciones[i].ubicacion]);
    }
    return data;
  }

  setUbicacionValoracion(ubicacionesValoraciones: Array<any>) {
    var data;
    for(var i=0;i<ubicacionesValoraciones.length;i++){
      data=this.database.executeSql("INSERT INTO ubicacion_valoracion (idubicacion_valoracion, "
                                                           +"ubicacion, valoracion)"
                                   +" VALUES (?, ?, ?)", [ubicacionesValoraciones[i].idubicacion_valoracion, 
                                                          ubicacionesValoraciones[i].ubicacion, 
                                                          ubicacionesValoraciones[i].valoracion]);
    }
    return data;
  }

  setLog(log: number) {
      var data;
      data = this.database.executeSql("INSERT INTO log (idlog) VALUES (?)", log);
      return data;
  }

  getServicios() {
    return this.database.executeSql("SELECT * from servicios", [])
    .then((data)=>{
      let servicios: string;
      if (data.rows.length > 0) {
        servicios = "[";
        for(let i=0; i<data.rows.length; i++){
          if(servicios.charAt(servicios.length-1)!="["){
            servicios = servicios.concat(",");
          }
          servicios = servicios.concat('{"idservicio": "'+data.rows.item(i).idservicio+'",');
          servicios = servicios.concat('"nombreservicio": "'+data.rows.item(i).nombreservicio+'",');
          servicios = servicios.concat('"iconoservicio": "'+data.rows.item(i).iconoservicio+'"}'); 
        }
        servicios = servicios.concat("]");
      }
      return servicios;
    });
  }
 
  getValoraciones(servicio: number){
    return this.database.executeSql("SELECT * FROM valoraciones v "
                                  +"JOIN servicios s ON v.servicio=s.idservicio "
                                  +"WHERE idservicio = "+ servicio, []).then((data) => {
      let valoraciones: string;
      if (data.rows.length > 0) {
        valoraciones = "[";
        for (var i = 0; i < data.rows.length; i++) {
          if(valoraciones.charAt(valoraciones.length-1)!="["){
            valoraciones = valoraciones.concat(",");
          }
          valoraciones = valoraciones.concat('{"nombrevaloracion": "'+data.rows.item(i).nombrevaloracion+'",');
          valoraciones = valoraciones.concat('"descripcion": "'+data.rows.item(i).descripcion+'",');
          valoraciones = valoraciones.concat('"foto": "'+data.rows.item(i).foto+'",');
          valoraciones = valoraciones.concat('"email": "'+data.rows.item(i).email+'"}');  
        }
        valoraciones = valoraciones.concat("]");
      }
      console.log("JSON VALORACIONES: "+valoraciones);
      return valoraciones;
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 
}
