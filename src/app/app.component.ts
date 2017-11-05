import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MisvaloracionesPage } from '../pages/misvaloraciones/misvaloraciones';
import { AcercaPage } from '../pages/acerca/acerca';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { ServiceProvider } from '../providers/service/service';
//import { OnInit } from '@angular/core';

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
              public databaseProvider: DatabaseProvider,
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
      //this.ngOnInit();
      //this.obtenerDatosExternos();
     //this.cargarAlmacenamientoInterno(this.datos);
    });
  }
  
  /*private createDatabase(){
    this.SQLite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.sqliteInterna.setDatabase(db);
      return this.sqliteInterna.createTable();
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
  }*/
  ngOnInit() {
    this.service.getDatos().subscribe(
      (res: any) => this.datos = res,
      (err: any) => console.error('Ha ocurrido un error al tratar de obtener los proyectos.')
    );
}
/*
  private cargarAlmacenamientoInterno(datos: any[]){
    //var dat: any;
    var sqlita: Sqlite;
    sqlita=this.sqliteInterna;
      datos.forEach(function(currentValue, index, arr){
        var dat: any = 
        {
          idservicio: datos[index].idservicios,
          nombreservicio: datos[index].nombreservicios,
          iconoservicio: datos[index].iconoservicios,
          nombrevaloracion: datos[index].nombrevaloracion
        }  
        console.log(dat.nombreservicio);  
        sqlita.agregar(dat);
      })
    }    
    //for(var i = 0; i < 5; i++){
      var dat: dat = 
        {
          idservicio: 1,
          nombreservicio: 'limpieza',
          iconoservicio: 3,
          nombrevaloracion: 'sdfsdf'
        }
        
       */
    //}
  //}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

