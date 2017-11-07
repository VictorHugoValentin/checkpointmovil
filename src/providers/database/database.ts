import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';


@Injectable()
export class DatabaseProvider {

  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public sqlitePorter: SQLitePorter, 
              private storage: Storage, 
              private sqlite: SQLite, 
              private platform: Platform, 
              private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
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
 
  setServicios(servicios) {
    var data;
    for(var i=0;i<servicios.length;i++){
      /*let servicio = [servicios[i].idservicio, 
                      servicios[i].nombreservicio, 
                      servicios[i].iconoservicio]*/
      data = this.database.executeSql("INSERT INTO servicios (idservicio, nombreservicio,"
                                                            +" iconoservicio)"
                                                            +" VALUES (?, ?, ?)", [servicios[i].idservicio, 
                                                            servicios[i].nombreservicio, 
                                                            servicios[i].iconoservicio])
    }
    data.then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  setValoraciones(valoraciones) {
    var data;
    for(var i=0;i<valoraciones.length;i++){
      /*let valoracion = [valoraciones[i].idvaloracion, 
                        valoraciones[i].nombrevaloracion, 
                        valoraciones[i].descripcion, 
                        valoraciones[i].foto,
                        valoraciones[i].email,
                        valoraciones[i].servicio]*/
      data = this.database.executeSql("INSERT INTO valoraciones (idvaloracion, nombrevaloracion,"
                                                           +" descripcion, foto, email, servicio)"
                                                           +" VALUES (?, ?, ?, ?, ?, ?)", [valoraciones[i].idvaloracion, 
                                                           valoraciones[i].nombrevaloracion, 
                                                           valoraciones[i].descripcion, 
                                                           valoraciones[i].foto,
                                                           valoraciones[i].email,
                                                           valoraciones[i].servicio])
    }
    data.then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  setUbicaciones(ubicaciones) {
    var data;
    for(var i=0;i<ubicaciones.length;i++){
      /*let ubicacion = [ubicaciones[i].idubicacion, 
                        ubicaciones[i].codigoqr, 
                        ubicaciones[i].nombreubicacion, 
                        ubicaciones[i].ubicacion]*/
      data = this.database.executeSql("INSERT INTO ubicaciones (idubicacion, codigoqr,"
                                                           +" nombreubicacion, ubicacion)"
                                                           +" VALUES (?, ?, ?, ?)", [ubicaciones[i].idubicacion, 
                                                           ubicaciones[i].codigoqr, 
                                                           ubicaciones[i].nombreubicacion, 
                                                           ubicaciones[i].ubicacion])
    }
    data.then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  setUbicacionValoracion(ubicacionesValoraciones) {
    var data;
    for(var i=0;i<ubicacionesValoraciones.length;i++){
      let ubicacionValoracion = [ubicacionesValoraciones[i].idubicacion_valoracion, 
                                  ubicacionesValoraciones[i].ubicacion, 
                                  ubicacionesValoraciones[i].valoracion]
      data = this.database.executeSql("INSERT INTO ubicacion_valoracion (idubicacion_valoracion, "
                                                           +"ubicacion, valoracion)"
                                                           +" VALUES (?, ?, ?)", ubicacionValoracion)
    }
    data.then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  setLog(log) {
      return this.database.executeSql("INSERT INTO log (idlog) VALUES (?)", log.idlog).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getServicios() {
    return this.database.executeSql("SELECT * FROM servicios", []).then((data) => {
      let datos = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          datos.push({ idservicio: data.rows.item(i).idservicio, 
                       nombreservicio: data.rows.item(i).nombreservicio, 
                       iconoservicio: data.rows.item(i).iconoservicio });
        }
      }
      return datos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
  getValoraciones(servicio){
    return this.database.executeSql("SELECT * FROM valoraciones v "
                                  +"JOIN servicios s ON v.servicio=s.idservicio "
                                  +"WHERE idservicio = "+ servicio, []).then((data) => {
      let datos = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          datos.push({ idservicio: data.rows.item(i).idservicio, 
                       nombreservicio: data.rows.item(i).nombreservicio, 
                       iconoservicio: data.rows.item(i).iconoservicio, 
                       nombrevaloracion: data.rows.item(i).nombrevaloracion });
        }
      }
      return datos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 

}
