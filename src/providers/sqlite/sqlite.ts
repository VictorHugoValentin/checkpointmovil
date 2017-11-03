import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the Sqlite provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
//declare var window : any;
@Injectable()
export class Sqlite {

  private db: SQLiteObject;
  private isOpen: Boolean; 
  //db: SQLiteObject = null;
  

  constructor(public http: Http,
              public almacenamiento: SQLite
             ) {
                if(!this.isOpen){
                  this.almacenamiento = new SQLite();
                  this.almacenamiento.create({name:"data.db", location:"default"}).then((db:SQLiteObject) => {
                    this.db = db;
                    db.executeSql("CREATE TABLE IF NOT EXISTS datoslocales(id INTEGER PRIMARY KEY AUTOINCREMENT, idservicio INTEGER, nombreservicio TEXT, iconoservicio INTEGER, nombrevaloracion TEXT)",[]);
                    this.isOpen = true;
                  }).catch((error) => {
                    console.log(error);
                  })
                }
              }

  cargarDatos(idservicio: number, nombreservicio: string, iconoservicio: number, nombrevaloracion: string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO datoslocales (idservicio, nombreservicio, iconoservicio, nombrevaloracion) VALUES (?,?,?,?)";
      this.db.executeSql(sql, [idservicio, nombreservicio, iconoservicio, nombrevaloracion]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      }); 
    });
  }

  getServicios(){
    return new Promise ((resolve, reject) => {
      let sql = "SELECT iconoservicio FROM  datoslocales";
      this.db.executeSql(sql, []).then((data) => {
        let arrayServicios = [];
        if(data.rows.length>0){
          for(var i = 0; i<data.rows.length; i++){
            arrayServicios.push({
              iconoservicio: data.rows.item(i).iconoservicio
            });
          }
        }
        resolve(arrayServicios);
      }, (error) => {
        reject(error);
      }); 
    });
  }
  /*setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  createTable(){
    let sql = 'CREATE TABLE datos(id INTEGER PRIMARY KEY AUTOINCREMENT, idservicio INTEGER, nombreservicio TEXT, iconoservicio INTEGER, nombrevaloracion TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM datos';
    return this.db.executeSql(sql, [])
    .then(response => {
      let datos = [];
      for (let index = 0; index < response.rows.length; index++) {
        datos.push( response.rows.item(index) );
      }
      return Promise.resolve( datos );
    })
    .catch(error => Promise.reject(error));
  }

  getIconosServicios(){
    let sql = 'SELECT iconoservicio FROM datos';
    return this.db.executeSql(sql, [])
    .then(response => {
      let datos = [];
      for (let index = 0; index < response.rows.length; index++) {
        datos.push( response.rows.item(index) );
      }
      return Promise.resolve( datos );
    })
    .catch(error => Promise.reject(error));
  }*/

  create(dato){
    let sql = 'INSERT INTO datos(idservicio, nombreservicio, iconoservicio, nombrevaloracion) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, 
    [dato.idservicio, dato.nombreservicio, dato.iconoservicio,dato.nombrevaloracion]);
  }
}
