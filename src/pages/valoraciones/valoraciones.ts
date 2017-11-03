import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ValoracionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valoraciones',
  templateUrl: 'valoraciones.html',
})
export class ValoracionesPage {
  valoraciones: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: ServiceProvider) {
    this.getValoraciones(this.navParams.get('servicio'));
  }
  
  getValoraciones(servicio){
    /*this.service.getValoraciones(servicio).subscribe(
      data=> this.valoraciones = data,
      err=> console.log(err)
    );*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValoracionesPage');
  }

}
