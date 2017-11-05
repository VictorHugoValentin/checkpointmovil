import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {ServiciosPage} from '../servicios/servicios';
//import {OpcionalesPage} from '../opcionales/opcionales';

import { ServiceProvider } from '../../providers/service/service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  scanData : {};
  encodeData : string ;
encodedData : {} ;
options :BarcodeScannerOptions;


constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private barcodeScanner: BarcodeScanner, 
            public service: ServiceProvider) { }
    

scan(){
     this.options = {
        prompt : "Escanee su codigoQR"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });         
}

servicios(){
       this.navCtrl.push(ServiciosPage);
}
/*
servicios(){
    this.navCtrl.push(OpcionalesPage);
}*/

encodeText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodeData).then((encodedData) => {

        console.log(encodedData);
        this.encodedData = encodedData;
        this.navCtrl.push(ServiciosPage);
    }, (err) => {
        console.log("Error occured : " + err);
    });                 
}
}
