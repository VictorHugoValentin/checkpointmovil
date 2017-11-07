import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MisvaloracionesPage } from '../pages/misvaloraciones/misvaloraciones';
import { AcercaPage } from '../pages/acerca/acerca';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseMySqlProvider } from '../providers/database-my-sql/database-my-sql';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;
  
  pages: Array<{title: string, component: any}>;

  servicios: any[];
  valoraciones: any[];
  ubicaciones: any[];
  ubicacionesValoraciones: any[];
  logs: any[];

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public databaseProvider: DatabaseProvider,
              public SQLite: SQLite,
              public databaseMySqlProvider: DatabaseMySqlProvider) {
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
      this.getServiciosMysql();
      this.getValoracionesMysql();
      this.getUbicacionesMysql();
      this.getUbicacionesValoracionesMysql();
      this.getLogsMysql();
      this.createDatabaseSQLite(this.servicios, this.valoraciones, 
                                this.ubicaciones, this.ubicacionesValoraciones,
                                this.logs);
    });
  }

  createDatabaseSQLite(servicios, valoraciones, ubicaciones, ubicacionesValoraciones, logs){
    this.databaseProvider.setServicios(servicios);
    this.databaseProvider.setValoraciones(valoraciones);
    this.databaseProvider.setUbicaciones(ubicaciones);
    this.databaseProvider.setUbicacionValoracion(ubicacionesValoraciones);
    this.databaseProvider.setLog(logs);
  }
  
  getServiciosMysql() {
    this.databaseMySqlProvider.getServicios().subscribe(
      (res: any) => this.servicios = res,
      (err: any) => console.error('Error al obtener servicios')
    );
  }

  getValoracionesMysql() {
    this.databaseMySqlProvider.getValoraciones().subscribe(
      (res: any) => this.valoraciones = res,
      (err: any) => console.error('Error al obtener valoraciones')
    );
  }

  getUbicacionesMysql() {
    this.databaseMySqlProvider.getUbicaciones().subscribe(
      (res: any) => this.ubicaciones = res,
      (err: any) => console.error('Error al obtener ubicaciones')
    );
  }

  getUbicacionesValoracionesMysql() {
    this.databaseMySqlProvider.getUbicacionesValoraciones().subscribe(
      (res: any) => this.ubicacionesValoraciones = res,
      (err: any) => console.error('Error al obtener ubicacionesValoraciones')
    );
  }

  getLogsMysql() {
    this.databaseMySqlProvider.getLogs().subscribe(
      (res: any) => this.logs = res,
      (err: any) => console.error('Error al obtener logs')
    );
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

