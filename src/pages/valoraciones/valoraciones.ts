import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-valoraciones',
  templateUrl: 'valoraciones.html',
})
export class ValoracionesPage {
  valoraciones: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public databaseProvider: DatabaseProvider) {
    this.getValoraciones(this.navParams.get('servicio'));
  }
  
  getValoraciones(servicio){
    this.databaseProvider.getValoraciones(servicio).then(data =>{
    this.valoraciones = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValoracionesPage');
  }

}
