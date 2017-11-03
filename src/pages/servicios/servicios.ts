import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValoracionesPage} from '../valoraciones/valoraciones';
import { ServiceProvider } from '../../providers/service/service';
import { Sqlite } from '../../providers/sqlite/sqlite';

/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {
  iconos: any[];  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: ServiceProvider,
              public Sqlite: Sqlite) {
                this.cargarIconosServicios();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }
  /*cargarIconosServicios(){
    this.Sqlite.getIconosServicios().then(
      data => this.iconos = data,
      err => console.log(err)
    );
  }*/
  cargarIconosServicios(){
      this.service.getDatos().subscribe(
        data => this.iconos = data,
        err => console.log(err)
      );
}
  valoraciones(servicio){
    this.navCtrl.push(ValoracionesPage, {
      servicio: servicio
    });
  }

}
