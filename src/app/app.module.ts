import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MisvaloracionesPage } from '../pages/misvaloraciones/misvaloraciones';
import { ServiciosPage } from '../pages/servicios/servicios';
import { ValoracionesPage } from '../pages/valoraciones/valoraciones';
import { AcercaPage } from '../pages/acerca/acerca';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';
import { Sqlite } from '../providers/sqlite/sqlite';
import { SQLite } from '@ionic-native/sqlite';
import { Camera } from '@ionic-native/camera';
import {OpcionalesPage} from '../pages/opcionales/opcionales';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MisvaloracionesPage,
    ValoracionesPage,
    ServiciosPage,
    OpcionalesPage,
    AcercaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  MisvaloracionesPage,
    ServiciosPage,
    ValoracionesPage,
    OpcionalesPage,
    AcercaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ServiceProvider,
    Sqlite,
    SQLite,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
 
})
export class AppModule {}
