import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValoracionesPage} from '../valoraciones/valoraciones';
//import { DatabaseMySqlProvider } from '../../providers/database-my-sql/database-my-sql';
import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {
  iconos = [];
  //icono = {}; 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              //public databaseMySqlProvider: DatabaseMySqlProvider,
              public databaseProvider: DatabaseProvider) {
                this.databaseProvider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.cargarIconos();
                  }
                })
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }
  cargarIconos(){
    this.databaseProvider.getServicios().then(data =>{
      this.iconos = data;
    });
  }
  
  /*cargarIconosServicios(){
      this.service.getDatos().subscribe(
        data => this.iconos = data,
        err => console.log(err)
      );
}*/
  valoraciones(servicio){
    this.navCtrl.push(ValoracionesPage, {
      servicio: servicio
    });
  }

}
