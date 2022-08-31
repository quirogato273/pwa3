"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_home_module_ts"],{

/***/ 4874:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9200);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 6302:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4874);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9200);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9200:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 2150);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 9801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9801:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2150:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header [translucent]=\"true\">\n  \n\n    <ion-item color=\"primary\">\n      <ion-label>RESUMEN</ion-label>\n      </ion-item>\n \n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n   \n    <ion-card-header>\n      <div align=\"center\">\n      <ion-card-title>EL MERCADO DE LAS APLICACIONES MOVILES EN EL MUNDO </ion-card-title></div>\n      <ion-card-subtitle></ion-card-subtitle>\n      \n      <ion-card-content>\n        En la actualidad las personas viven sumergidas en el mundo de las aplicaciones pueden pasar\n        horas en el celular, incluso la consultora App Annie asegura que esto ha cambiado los hábitos de\n        miles de usuarios que a diario están conectados con el mundo digital, pero la ventaja de esto es\n        que las aplicaciones no solo brindan entretenimiento a las personas, sino que se han convertido en\n        un generador de empleo importante en todo el mundo.\n      </ion-card-content>\n\n\n    </ion-card-header>\n    <div align=\"center\">\n    <img src=\"https://www.ceupe.com/images/easyblog_images/157/b2ap3_medium_Sin-ttulo-_20190211-124354_1.jpg\"width\n    =\"420\"height=\"450\" /></div>\n    <ion-card-content>\n      <div align=\"center\">\n      <ion-card-content center>\"GRAFICA 1. Negocio de las App\"</ion-card-content>  </div>\n        <ion-card-content>\n          En 2008 cuando Apple inauguró su tienda App Store, se evidencio un crecimiento en la economía\n          de las aplicaciones, incluso App Annie señala que en el año 2019 los ingresos de los\n          desarrolladores de las aplicaciones fueron de 89.000 millones de dólares y que en el 2020 alcanzó\n          los 189.000 millones de dólares, esto muestra que las personas cada vez hacen un mayor uso de\n          las aplicaciones y al mismo tiempo esto permite que la economia de los smartphones crezca.\n        </ion-card-content>\n    \n     \n    </ion-card-content>\n    <div align=\"center\">\n    <img src=\"https://www.ceupe.com/images/easyblog_images/157/b2ap3_medium_Sin-ttulo-_20190211-124410_1.jpg\" width\n    =\"420\"height=\"450\" /></div>\n    <ion-card-content>\n      <div align=\"center\">\n      <ion-card-content>\n        \n        \"GRAFICA 2. Ranking de Apps\"\n      </ion-card-content> </div>\n        <ion-card-content>\n          Así, la economía de las aplicaciones goza de una buena estabilidad en el mercado, incluso en el\n          2016 las descargas en las tiendas oficiales aumentaron en un 15% y el tiempo de uso también se\n          incrementó en un 25%, lo cual llevo a las tiendas de Google y Apple pagarles más a los creadores\n          de utilidades mas de 35.000 millones de dólares.\n\n        </ion-card-content>\n     \n      \n      </ion-card-content>\n      <div align=\"center\">\n      <img src=\"https://www.ceupe.com/images/easyblog_images/157/Sin-ttulo-_20190211-124451_1.jpg\" width\n      =\"420\"height=\"450\" /></div>\n      <ion-card-content>\n      <div align=\"center\">\n        <ion-card-content>\n          \"GRAFICA 3. Encontrar Apps\"\n        </ion-card-content>\n      </div>\n     \n      <ion-card>\n        <div align=\"center\">\n        <H2>TIP</H2>\n        <ion-card-content>\n          \"Para tener una aplicacion exitosa se debe elegir la plataforma adecuada, \n          crear campaña de lanzamiento, crear anuncios gestionando correctamente el tiempo y los contactos, promocionarla en las redes \n          mas utilizadas, brindar contenido intuitivo en poca palabras se le debe hacer la vida mas facil al usuario\" \n        </ion-card-content></div>\n       \n      </ion-card>\n\n\n    </ion-card-content>\n      \n    \n       \n</ion-card>\n  \n  <!--<ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 1 page\"></app-explore-container>-->\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map