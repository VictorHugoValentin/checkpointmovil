import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-valoraciones',
  templateUrl: 'valoraciones.html',
})
export class ValoracionesPage {
  valoraciones: Array<any>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public databaseProvider: DatabaseProvider) {
    this.getValoraciones(this.navParams.get('servicio'));
  }
  
  //CONTROLAR LOS CASOS EN LOS QUE EL SERVICIO NO TIENE VALORAICONES 
  //(no tendria q estar habilitado desde WEB APP)
  getValoraciones(servicio: number){
    this.databaseProvider.getValoraciones(servicio).then(data =>{
    this.valoraciones =  JSON.parse(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValoracionesPage');
  }

}
