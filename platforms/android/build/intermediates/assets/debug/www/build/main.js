webpackJsonp([6],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseMySqlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabaseMySqlProvider = (function () {
    function DatabaseMySqlProvider(http) {
        this.http = http;
        //api: string = "http://10.0.1.140/checkpointA/";
        this.api = "http://192.168.0.136/checkpointA/";
    }
    DatabaseMySqlProvider.prototype.getServicios = function () {
        return this.http.get(this.api + "listarServicios.php").map(function (res) { return res.json(); });
    };
    DatabaseMySqlProvider.prototype.getValoraciones = function () {
        return this.http.get(this.api + "listarValoraciones.php").map(function (res) { return res.json(); });
    };
    DatabaseMySqlProvider.prototype.getUbicaciones = function () {
        return this.http.get(this.api + "listarUbicaciones.php").map(function (res) { return res.json(); });
    };
    DatabaseMySqlProvider.prototype.getUbicacionesValoraciones = function () {
        return this.http.get(this.api + "listarUbicacionesValoraciones.php").map(function (res) { return res.json(); });
    };
    DatabaseMySqlProvider.prototype.getLogs = function () {
        return this.http.get(this.api + 'listarLogs.php').map(function (res) { return res.json(); });
    };
    DatabaseMySqlProvider.prototype.insertarValoracion = function (parans) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'insertval.php', parans, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    return DatabaseMySqlProvider;
}());
DatabaseMySqlProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DatabaseMySqlProvider);

//# sourceMappingURL=database-my-sql.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercaPage = (function () {
    function AcercaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercaPage');
    };
    return AcercaPage;
}());
AcercaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-acerca',template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\acerca\acerca.html"*/`<!--\n  Generated template for the AcercaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n        <ion-navbar color="verde">\n                <ion-title >\n                        <img src="assets/img/logo.png" width="30" height="40" />\n                    </ion-title>\n                    <button ion-button menuToggle end>\n                        <ion-icon name="menu"></ion-icon>\n                    </button>\n        </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <br/><b><i>Version: </i></b>1.0.0 beta\n      <br/><b><i>Desarrolladores: </i></b>GVR Soluciones Informaticas\n      <br/><p align="justify">Esta aplicación Fue desarrollada en el marco de la cursada de la materia Laboratorio de Desarrollo de Software de la carrera Analista de SIstemas </p>\n      <br/><b><i>Alumnos: </i></b><br/>\n      -Rojas Juan<br/>\n      -Guanuco Gustavo<br/>\n      -Valentin Victor<br/>\n      <br/><b><i>Docentes: </i></b><br/>\n      -Sofia Osiris<br/> \n      -Gestos Esteban<br/>\n      -Hallar Karim \n     \n    \n      <!--<div *ngIf="scanData">\n          <p>Scanned Text : </p>\n          <p>Scanned Format : </p>\n      </div>-->\n       \n      <ion-footer >\n        <ion-toolbar color="amarillo" >\n            <ion-title>Acerca</ion-title>\n        </ion-toolbar>\n      </ion-footer>\n  </ion-content>\n`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\acerca\acerca.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AcercaPage);

//# sourceMappingURL=acerca.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcionalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OpcionalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpcionalesPage = (function () {
    function OpcionalesPage(navCtrl, navParams, camara) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camara = camara;
        this.formErrors = {
            'email': []
        };
        this.validationMessages = {
            'email': {
                'pattern': 'Formato invalido'
            },
        };
        this.permiteDescripcion(this.navParams.get('descripcion'));
        this.permiteFoto(this.navParams.get('foto'));
        this.permiteEmail(this.navParams.get('email'));
    }
    OpcionalesPage.prototype.permiteDescripcion = function (descripcion) {
        this.descripcion = descripcion;
        console.log("DESCRIPCION: " + this.descripcion);
    };
    OpcionalesPage.prototype.permiteFoto = function (foto) {
        this.foto = foto;
        console.log("FOTO: " + this.foto);
    };
    OpcionalesPage.prototype.permiteEmail = function (email) {
        this.email = email;
        console.log("EMAIL: " + this.email);
    };
    OpcionalesPage.prototype.tomarFoto = function () {
        var _this = this;
        var options = {
            quality: 20,
            destinationType: this.camara.DestinationType.FILE_URI,
            encodingType: this.camara.EncodingType.JPEG,
            mediaType: this.camara.MediaType.PICTURE
        };
        this.camara.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = imageData;
        }, function (err) {
            // Handle error
        });
    };
    OpcionalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpcionalesPage');
    };
    //Metodso para validar FORMULARIO (email)
    OpcionalesPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.termsAgree = true;
        this.sampleForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
        this.sampleForm.valueChanges
            .debounceTime(400)
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    OpcionalesPage.prototype.onValueChanged = function (data) {
        if (!this.sampleForm) {
            return;
        }
        var form = this.sampleForm;
        for (var field in this.formErrors) {
            // Limpiamos los mensajes anteriores
            this.formErrors[field] = [];
            this.sampleForm[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field].push(messages[key]);
                }
            }
        }
    };
    return OpcionalesPage;
}());
OpcionalesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-opcionales',template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\opcionales\opcionales.html"*/`<!--\n  Generated template for the OpcionalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n        <ion-navbar color="verde">\n                <ion-title >\n                        <img src="assets/img/logo.png" width="30" height="40" />\n                    </ion-title>\n                    <button ion-button menuToggle end>\n                        <ion-icon name="menu"></ion-icon>\n                    </button>\n        </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="form-content">\n\n  <!-- INICIO del formulario -->\n  <form [formGroup]="sampleForm" class="form" (ngSubmit)="onSubmit(sampleForm.value)" >\n      \n         <!-- INICIO del boton fotografia -->\n         <ion-grid>\n           <ion-row>\n            <ion-col>\n              <ion-label stacked>Fotografia</ion-label>\n              <img [src]="base64Image"/>\n            </ion-col>\n            <ion-col>\n                <div *ngIf="foto==1">\n                    <ion-label stacked></ion-label>\n                  <button ion-button color="verdea" icon-right full large (click)="tomarFoto()">\n                    <ion-icon name="camera">\n                    </ion-icon>\n                  </button>\n                </div>\n              </ion-col>\n           </ion-row>\n         </ion-grid>\n         \n           \n          \n         <!-- FIN  del boton fotografia -->\n      \n         <!-- INICIO  del campo email -->\n         <ion-item *ngIf="email==1">\n           <ion-label floating>Correo electronico</ion-label>\n           <ion-input type="email" formControlName="email"></ion-input>\n         </ion-item>\n         <div *ngIf="formErrors.email">\n           <div *ngFor="let errors of formErrors.email" >\n             <p class="alert">{{ errors }}<p>\n           </div>\n         </div>\n         <!-- FIN  del campo email -->\n    \n        <!-- INICIO  del campo descripcion -->\n        <ion-item *ngIf="descripcion==1">\n            <ion-label floating >Descripcion</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n          <!-- FIN  del campo descripcion --> \n\n          <!-- Botón que envía datos opcionales de valoracion -->\n    <button ion-button full type="submit" color="verdea" [disabled]="!sampleForm.valid">VALORAR</button>\n    \n     </form>\n     <!-- FIN del formulario -->\n     <ion-footer>\n        <ion-toolbar color="amarillo">\n            <ion-title>Opcionales</ion-title>\n        </ion-toolbar>\n    </ion-footer>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\opcionales\opcionales.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], OpcionalesPage);

//# sourceMappingURL=opcionales.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valoraciones_valoraciones__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiciosPage = (function () {
    //icono = {}; 
    function ServiciosPage(navCtrl, navParams, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.databaseProvider = databaseProvider;
        this.databaseProvider.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.cargarIconos();
            }
        });
    }
    ServiciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiciosPage');
    };
    ServiciosPage.prototype.cargarIconos = function () {
        var _this = this;
        this.databaseProvider.getServicios()
            .then(function (data) {
            return _this.iconos = JSON.parse(data);
        });
    };
    ServiciosPage.prototype.valoraciones = function (servicio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__valoraciones_valoraciones__["a" /* ValoracionesPage */], {
            servicio: servicio
        });
    };
    return ServiciosPage;
}());
ServiciosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-servicios',template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\servicios\servicios.html"*/`<ion-header>\n    <ion-navbar color="verde">\n        <ion-title>\n            <img src="assets/img/logo.png" width="30" height="40" />\n        </ion-title>\n        <button ion-button menuToggle end>\n                        <ion-icon name="menu"></ion-icon>\n                    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row text-center>\n            <ion-col col-3 col-md-3 col-xl-3 *ngFor="let icono of iconos">\n                <div class="image-container" \n                [style.background-image]="\'url(assets/servicios/\'+icono.iconoservicio+\'.png)\'"  \n                (click)="valoraciones(icono.idservicio)"></div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-footer>\n        <ion-toolbar color="amarillo">\n            <ion-title>Servicios</ion-title>\n        </ion-toolbar>\n    </ion-footer>\n</ion-content>`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\servicios\servicios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
], ServiciosPage);

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValoracionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_opcionales_opcionales__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ValoracionesPage = (function () {
    function ValoracionesPage(navCtrl, navParams, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.databaseProvider = databaseProvider;
        this.getValoraciones(this.navParams.get('servicio'));
    }
    //CONTROLAR LOS CASOS EN LOS QUE EL SERVICIO NO TIENE VALORAICONES 
    //(no tendria q estar habilitado desde WEB APP)
    ValoracionesPage.prototype.getValoraciones = function (servicio) {
        var _this = this;
        this.databaseProvider.getValoraciones(servicio).then(function (data) {
            _this.valoraciones = JSON.parse(data);
        });
    };
    ValoracionesPage.prototype.opcionales = function (descripcion, foto, email) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_opcionales_opcionales__["a" /* OpcionalesPage */], {
            descripcion: descripcion,
            foto: foto,
            email: email
        });
    };
    ValoracionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValoracionesPage');
    };
    return ValoracionesPage;
}());
ValoracionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-valoraciones',template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\valoraciones\valoraciones.html"*/`<!--\n  Generated template for the ValoracionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n        <ion-navbar color="verde">\n                <ion-title >\n                        <img src="assets/img/logo.png" width="30" height="40" />\n                    </ion-title>\n                    <button ion-button menuToggle end>\n                        <ion-icon name="menu"></ion-icon>\n                    </button>\n        </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item *ngFor="let valoracion of valoraciones">\n        <div (click)="opcionales(valoracion.descripcion,valoracion.foto,valoracion.email)">\n          <h1>{{valoracion.nombrevaloracion}}</h1>\n      </div>\n      </ion-item>\n  </ion-list>\n  <ion-footer >\n    <ion-toolbar color="amarillo" >\n        <ion-title>Valoraciones</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\valoraciones\valoraciones.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
], ValoracionesPage);

//# sourceMappingURL=valoraciones.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acerca/acerca.module": [
		580,
		5
	],
	"../pages/confirmacion/confirmacion.module": [
		581,
		1
	],
	"../pages/opcionales/opcionales.module": [
		582,
		4
	],
	"../pages/servicios/servicios.module": [
		583,
		3
	],
	"../pages/ub-manual/ub-manual.module": [
		584,
		0
	],
	"../pages/valoraciones/valoraciones.module": [
		585,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_servicios__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {OpcionalesPage} from '../opcionales/opcionales';
var HomePage = (function () {
    function HomePage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
    HomePage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: "Escanee su codigoQR"
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log(barcodeData);
            _this.scanData = barcodeData;
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    HomePage.prototype.servicios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__servicios_servicios__["a" /* ServiciosPage */]);
    };
    /*
    servicios(){
        this.navCtrl.push(OpcionalesPage);
    }*/
    HomePage.prototype.encodeText = function () {
        var _this = this;
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(function (encodedData) {
            console.log(encodedData);
            _this.encodedData = encodedData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__servicios_servicios__["a" /* ServiciosPage */]);
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\home\home.html"*/`<ion-header>\n    <ion-navbar color="verde">\n            <ion-title>\n                    <img src="assets/img/logo.png" width="30" height="40" />\n            </ion-title>\n            <button ion-button menuToggle end>\n                    <ion-icon name="menu"></ion-icon>\n            </button>              \n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n    \n    <ion-grid>\n        <ion-row align="center"> \n                <br/><b><i>Bienvenido</i></b><br/>  \n        </ion-row>\n        <ion-row>\n                <p align="justify">Esta aplicación le permitira valorar los servicios brindados por la Unidad Academica Rio Gallegos de Universidad Nacional de la Patagonia Austral\n                    </p><br/>\n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <br/>  \n        </ion-row>\n        <ion-row>\n                <ion-col col-12 col-sm>\n                        <button color="verdea" ion-button icon-only full large (click)="servicios()"> \n                                Acceso Manual\n                                <ion-icon name="hand"></ion-icon> \n                        </button>\n                </ion-col>\n        </ion-row>\n        <ion-row>\n                <ion-col col-12 col-sm>\n                <button color="verdea" ion-button icon-only full large (click)="scan()"> \n                        Codigo QR     \n                        <ion-icon name="expand"></ion-icon>\n                </button>\n                </ion-col>\n        </ion-row>\n    </ion-grid>\n    \n    <!--<button color="verdea" ion-button icon-only full large (click)="servicios()">\n     Acceso Manual\n      <ion-icon name="hand"></ion-icon>\n    </button>\n    <br/>\n    <button color="verdea" ion-button icon-only full  large (click)="scan()">\n        Codigo QR     \n        <ion-icon name="expand"></ion-icon>\n    </button>-->\n\n    <!--<div *ngIf="scanData">\n        <p>Scanned Text : </p>\n        <p>Scanned Format : </p>\n    </div>-->\n\n    <ion-footer>\n        <ion-toolbar color="amarillo">\n            <ion-title><img src="assets/img/logoinf.png" width="110" height="20" /></ion-title>\n        </ion-toolbar>\n    </ion-footer>\n</ion-content>`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisvaloracionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MisvaloracionesPage = MisvaloracionesPage_1 = (function () {
    function MisvaloracionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['done-all', 'clock'];
        this.items = [];
        for (var i = 1; i < 30; i++) {
            this.items.push({
                title: 'Valoración ' + i,
                note: 'Fecha ' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    MisvaloracionesPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(MisvaloracionesPage_1, {
            item: item
        });
    };
    return MisvaloracionesPage;
}());
MisvaloracionesPage = MisvaloracionesPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\misvaloraciones\misvaloraciones.html"*/`<ion-header>\n    <ion-navbar color="verde">\n        <ion-title >\n                <img src="assets/img/logo.png" width="30" height="40" />\n        </ion-title>\n        <button ion-button menuToggle end>\n                <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list show-delete="showDeleteItem">\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n  <ion-footer >\n    <ion-toolbar color="amarillo" >\n        <ion-title>Mis valoraciones</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\pages\misvaloraciones\misvaloraciones.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MisvaloracionesPage);

var MisvaloracionesPage_1;
//# sourceMappingURL=misvaloraciones.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_misvaloraciones_misvaloraciones__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_servicios_servicios__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_valoraciones_valoraciones__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_acerca_acerca__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_opcionales_opcionales__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_database_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_sqlite_porter__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_my_sql_database_my_sql__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_misvaloraciones_misvaloraciones__["a" /* MisvaloracionesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_valoraciones_valoraciones__["a" /* ValoracionesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_servicios_servicios__["a" /* ServiciosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_opcionales_opcionales__["a" /* OpcionalesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_acerca_acerca__["a" /* AcercaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/acerca/acerca.module#AcercaPageModule', name: 'AcercaPage', segment: 'acerca', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirmacion/confirmacion.module#ConfirmacionPageModule', name: 'ConfirmacionPage', segment: 'confirmacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/opcionales/opcionales.module#OpcionalesPageModule', name: 'OpcionalesPage', segment: 'opcionales', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/servicios/servicios.module#ServiciosPageModule', name: 'ServiciosPage', segment: 'servicios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ub-manual/ub-manual.module#UbManualPageModule', name: 'UbManualPage', segment: 'ub-manual', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/valoraciones/valoraciones.module#ValoracionesPageModule', name: 'ValoracionesPage', segment: 'valoraciones', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_misvaloraciones_misvaloraciones__["a" /* MisvaloracionesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_servicios_servicios__["a" /* ServiciosPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_valoraciones_valoraciones__["a" /* ValoracionesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_opcionales_opcionales__["a" /* OpcionalesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_acerca_acerca__["a" /* AcercaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_16__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_database_my_sql_database_my_sql__["a" /* DatabaseMySqlProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_misvaloraciones_misvaloraciones__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_acerca_acerca__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_my_sql_database_my_sql__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, databaseProvider, SQLite, databaseMySqlProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.databaseProvider = databaseProvider;
        this.SQLite = SQLite;
        this.databaseMySqlProvider = databaseMySqlProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Mis Valoraciones', component: __WEBPACK_IMPORTED_MODULE_5__pages_misvaloraciones_misvaloraciones__["a" /* MisvaloracionesPage */] },
            { title: 'Acerca', component: __WEBPACK_IMPORTED_MODULE_6__pages_acerca_acerca__["a" /* AcercaPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.getServiciosMysql();
            _this.getValoracionesMysql();
            _this.getUbicacionesMysql();
            _this.getUbicacionesValoracionesMysql();
            _this.getLogsMysql();
        });
    };
    //GET's datos MySQL
    MyApp.prototype.getServiciosMysql = function () {
        var _this = this;
        this.databaseMySqlProvider.getServicios().subscribe(function (data) {
            _this.servicios = data;
            _this.databaseProvider.setServicios(_this.servicios);
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.getValoracionesMysql = function () {
        var _this = this;
        this.databaseMySqlProvider.getValoraciones().subscribe(function (data) {
            _this.valoraciones = data;
            _this.databaseProvider.setValoraciones(_this.valoraciones);
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.getUbicacionesMysql = function () {
        var _this = this;
        this.databaseMySqlProvider.getUbicaciones().subscribe(function (data) {
            _this.ubicaciones = data;
            _this.databaseProvider.setUbicaciones(_this.ubicaciones);
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.getUbicacionesValoracionesMysql = function () {
        var _this = this;
        this.databaseMySqlProvider.getUbicacionesValoraciones().subscribe(function (data) {
            _this.ubicacionesValoraciones = data;
            _this.databaseProvider.setUbicacionValoracion(_this.ubicacionesValoraciones);
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.getLogsMysql = function () {
        var _this = this;
        this.databaseMySqlProvider.getLogs().subscribe(function (data) {
            _this.logs = data;
            _this.databaseProvider.setLog(_this.logs);
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\app\app.html"*/`<ion-menu id="rightMenu" [content]="content" side="right" color="verde" type="reveal">\n  <ion-header>\n    <ion-toolbar color="verde">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list >\n      <button  menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"C:\Users\mailo\Desktop\Appcheck\lectoQR2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_9__providers_database_my_sql_database_my_sql__["a" /* DatabaseMySqlProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_porter__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_my_sql_database_my_sql__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DatabaseProvider = (function () {
    function DatabaseProvider(sqlitePorter, databaseMySqlProvider, storage, sqlite, platform, http) {
        var _this = this;
        this.sqlitePorter = sqlitePorter;
        this.databaseMySqlProvider = databaseMySqlProvider;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.http = http;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
        this.platform.ready().then(function () {
            _this.sqlite = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]();
            _this.sqlite.create({
                name: 'SQLiteData.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.storage.get('database_filled').then(function (val) {
                    if (val) {
                        _this.databaseReady.next(true);
                    }
                    else {
                        _this.fillDatabase();
                    }
                });
            });
        });
    }
    DatabaseProvider.prototype.fillDatabase = function () {
        var _this = this;
        this.http.get('assets/SQLiteDatos.sql')
            .map(function (res) { return res.text(); })
            .subscribe(function (sql) {
            _this.sqlitePorter.importSqlToDb(_this.database, sql)
                .then(function (data) {
                _this.databaseReady.next(true);
                _this.storage.set('database_filled', true);
            })
                .catch(function (e) { return console.error(e); });
        });
    };
    DatabaseProvider.prototype.setServicios = function (servicios) {
        var data;
        for (var i = 0; i < servicios.length; i++) {
            data = this.database.executeSql("INSERT INTO servicios (idservicio, nombreservicio, iconoservicio)"
                + " VALUES (?, ?, ?)", [servicios[i].idservicio,
                servicios[i].nombreservicio,
                servicios[i].iconoservicio]);
        }
        return data;
    };
    DatabaseProvider.prototype.setValoraciones = function (valoraciones) {
        var data;
        for (var i = 0; i < valoraciones.length; i++) {
            data = this.database.executeSql("INSERT INTO valoraciones (idvaloracion, nombrevaloracion,"
                + " descripcion, foto, email, servicio)"
                + " VALUES (?, ?, ?, ?, ?, ?)", [valoraciones[i].idvaloracion,
                valoraciones[i].nombrevaloracion,
                valoraciones[i].descripcion,
                valoraciones[i].foto,
                valoraciones[i].email,
                valoraciones[i].servicio]);
        }
        return data;
    };
    DatabaseProvider.prototype.setUbicaciones = function (ubicaciones) {
        var data;
        for (var i = 0; i < ubicaciones.length; i++) {
            data = this.database.executeSql("INSERT INTO ubicaciones (idubicacion, codigoqr,"
                + " nombreubicacion, ubicacion)"
                + " VALUES (?, ?, ?, ?)", [ubicaciones[i].idubicacion,
                ubicaciones[i].codigoqr,
                ubicaciones[i].nombreubicacion,
                ubicaciones[i].ubicacion]);
        }
        return data;
    };
    DatabaseProvider.prototype.setUbicacionValoracion = function (ubicacionesValoraciones) {
        var data;
        for (var i = 0; i < ubicacionesValoraciones.length; i++) {
            data = this.database.executeSql("INSERT INTO ubicacion_valoracion (idubicacion_valoracion, "
                + "ubicacion, valoracion)"
                + " VALUES (?, ?, ?)", [ubicacionesValoraciones[i].idubicacion_valoracion,
                ubicacionesValoraciones[i].ubicacion,
                ubicacionesValoraciones[i].valoracion]);
        }
        return data;
    };
    DatabaseProvider.prototype.setLog = function (log) {
        var data;
        data = this.database.executeSql("INSERT INTO log (idlog) VALUES (?)", log);
        return data;
    };
    DatabaseProvider.prototype.getServicios = function () {
        return this.database.executeSql("SELECT * from servicios", [])
            .then(function (data) {
            var servicios;
            if (data.rows.length > 0) {
                servicios = "[";
                for (var i = 0; i < data.rows.length; i++) {
                    if (servicios.charAt(servicios.length - 1) != "[") {
                        servicios = servicios.concat(",");
                    }
                    servicios = servicios.concat('{"idservicio": "' + data.rows.item(i).idservicio + '",');
                    servicios = servicios.concat('"nombreservicio": "' + data.rows.item(i).nombreservicio + '",');
                    servicios = servicios.concat('"iconoservicio": "' + data.rows.item(i).iconoservicio + '"}');
                }
                servicios = servicios.concat("]");
            }
            return servicios;
        });
    };
    DatabaseProvider.prototype.getValoraciones = function (servicio) {
        return this.database.executeSql("SELECT * FROM valoraciones v "
            + "JOIN servicios s ON v.servicio=s.idservicio "
            + "WHERE idservicio = " + servicio, []).then(function (data) {
            var valoraciones;
            if (data.rows.length > 0) {
                valoraciones = "[";
                for (var i = 0; i < data.rows.length; i++) {
                    if (valoraciones.charAt(valoraciones.length - 1) != "[") {
                        valoraciones = valoraciones.concat(",");
                    }
                    valoraciones = valoraciones.concat('{"nombrevaloracion": "' + data.rows.item(i).nombrevaloracion + '",');
                    valoraciones = valoraciones.concat('"descripcion": "' + data.rows.item(i).descripcion + '",');
                    valoraciones = valoraciones.concat('"foto": "' + data.rows.item(i).foto + '",');
                    valoraciones = valoraciones.concat('"email": "' + data.rows.item(i).email + '"}');
                }
                valoraciones = valoraciones.concat("]");
            }
            console.log("JSON VALORACIONES: " + valoraciones);
            return valoraciones;
        });
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    return DatabaseProvider;
}());
DatabaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
        __WEBPACK_IMPORTED_MODULE_8__providers_database_my_sql_database_my_sql__["a" /* DatabaseMySqlProvider */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DatabaseProvider);

//# sourceMappingURL=database.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map