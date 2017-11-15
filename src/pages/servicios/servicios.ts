import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValoracionesPage } from '../valoraciones/valoraciones';
import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {
  iconos: Array<any>;
  ubicacion: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public databaseProvider: DatabaseProvider) {
    this.databaseProvider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.ubicacion = this.navParams.get('ubicacion');
        this.cargarIconos(this.ubicacion);
      }
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }

  cargarIconos(ubicacion: string) {
    if (ubicacion != null) {
      this.databaseProvider.getServiciosQR(ubicacion)
        .then(data =>
          this.iconos = JSON.parse(data)
        );
    } else {
      this.databaseProvider.getServicios()
        .then(data =>
          this.iconos = JSON.parse(data)
        );
    }
  }

  valoraciones(servicio: number) {
    this.navCtrl.push(ValoracionesPage, {
      servicio: servicio,
      ubicacion: this.ubicacion
    });
  }

}
