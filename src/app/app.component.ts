import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MisvaloracionesPage } from '../pages/misvaloraciones/misvaloraciones';
import { AcercaPage } from '../pages/acerca/acerca';
import { Sqlite } from '../providers/sqlite/sqlite';
import { SQLite } from '@ionic-native/sqlite';
import { ServiceProvider } from '../providers/service/service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;
  
  pages: Array<{title: string, component: any}>;
  datos: any[];
  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public sqlite: Sqlite,
              public SQLite: SQLite,
              public service: ServiceProvider) {
  this.initializeApp();
	this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Mis Valoraciones', component: MisvaloracionesPage },
      { title: 'Acerca', component: AcercaPage },
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.createDatabase();
      //this.obtenerDatosExternos();
      //this.cargarAlmacenamientoInterno(this.datos);
    });
  }
  /*
  private createDatabase(){
    this.SQLite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.sqlite.setDatabase(db);
      return this.sqlite.createTable();
    })
    .then(() =>{
      this.splashScreen.hide();
      this.rootPage = 'HomePage';
    })
    .catch(error =>{
      console.error(error);
    });
  }

  private obtenerDatosExternos(){
    this.service.getDatos().subscribe(
      data => this.datos = data,
      err => console.log(err)
    );
  }

  private cargarAlmacenamientoInterno(datos: any[]){
    interface dat{
      idservicio: number,
      nombreservicio: string,
      iconoservicio: number,
      nombrevaloracion: string
    }
    //for(var i = 0; i < 5; i++){
      var dat: dat = 
        {
          idservicio: 1,
          nombreservicio: 'limpieza',
          iconoservicio: 3,
          nombrevaloracion: 'sdfsdf'
        }
        
      this.sqlite.create(dat); 
    //}
  }*/

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

