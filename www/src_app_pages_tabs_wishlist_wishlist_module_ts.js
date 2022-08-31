"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_wishlist_wishlist_module_ts"],{

/***/ 4637:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPageRoutingModule": () => (/* binding */ WishlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.page */ 9283);




const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_0__.WishlistPage
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ 5170:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPageModule": () => (/* binding */ WishlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist-routing.module */ 4637);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page */ 9283);







let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistPageRoutingModule
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_1__.WishlistPage]
    })
], WishlistPageModule);



/***/ }),

/***/ 9283:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPage": () => (/* binding */ WishlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _wishlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.page.html?ngResource */ 1235);
/* harmony import */ var _wishlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page.scss?ngResource */ 9044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let WishlistPage = class WishlistPage {
    constructor() { }
    ngOnInit() {
    }
};
WishlistPage.ctorParameters = () => [];
WishlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-wishlist',
        template: _wishlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_wishlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WishlistPage);



/***/ }),

/***/ 9044:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNobGlzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1235:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/wishlist/wishlist.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  \n  <ion-toolbar>\n    \n    \n    <ion-item color=\"primary\">\n      <ion-label>CATEGORIAS</ion-label>\n      </ion-item>\n    \n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n   \n    <ion-card-header>\n      <div align=\"center\"> \n      <ion-card-title>CATEGORIAS DE LAS APLICACIONES </ion-card-title></div>\n      <ion-card-subtitle></ion-card-subtitle>\n      \n      <ion-card-content>\n        Cuando la aplicacion esta publicada en la Apple Store es necesario crear una lista con los site que tengan\n        relación con la aplicación desarrollada, como los mencionados a continuación:\n      </ion-card-content>\n\n\n    </ion-card-header>\n    <div align=\"center\">\n    <ion-card-content>1. PRESS RELEASES</ion-card-content>\n    <img src=\"https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg\"width\n    =\"200\"height=\"150\"/></div>\n    <ion-card-content>\n      <ion-card>\n        \n        <ion-card-content>\n         \n          Buscar temas similares a la aplicacion ya sea:\"Blogs, Publicaciones de\n          interés, Revistas, Periódicos, ect. Es recomendable hacer un listado.\n        \n        </ion-card-content>\n      </ion-card>\n     \n    </ion-card-content>\n    <div align=\"center\">\n    <ion-card-content>2. EMAIL </ion-card-content>\n    <img src=\"https://cdn-icons-png.flaticon.com/512/6244/6244710.png\" width\n    =\"100\"height=\"100\"/></div>\n    <ion-card-content>\n\n      <ion-card>\n    \n        <ion-card-content>\n          Ejecutar una buena campaña de emailing para anunciarle a los clientes potenciales \n          el lanzamiento de la nueva aplicación, si no se dispone de la\n          información se puede comprar o alquilar los correos de clientes de otras empresas y claramente que \n          estén acordes con la ley de protección de datos.\n        </ion-card-content>\n      </ion-card>\n\n      </ion-card-content>\n\n      <div align=\"center\">\n      <ion-card-content> 3. MARKETING </ion-card-content>\n      <img src=\"https://mailrelay.com/wp-content/uploads/2018/08/problemas-de-marketing.png\" width\n      =\"250\"height=\"150\"/></div>\n      <ion-card-content>\n\n        <ion-card>\n      \n          <ion-card-content>\n            Es importante dar a conocer la aplicación voz a voz con familiares,\n            amigos, compañeros de trabajo, etc y de igual manera de forma online es decir, que la\n            aplicación incluya los botos de share como Facebook, whatsapp, Twitter que\n            conecten con otras personas y compartan la aplicación.\n          </ion-card-content>\n        \n        </ion-card>\n        <div align=\"center\">\n           <ion-card-content> 4. PUBLICITY </ion-card-content>\n    <img src=\"https://www.matiasvillanueva.com/wp-content/uploads/2019/07/Curso-de-Facebook-Ads-en-Santiago.jpg\" width\n    =\"230\"height=\"180\"/></div>\n    <ion-card-content>\n    \n      <ion-card>\n\n        <ion-card-content>\n          Se debe hacer publicidad a la aplicación ya sea por TV Locales, emisoras de radio, paginas web o buscar otras aplicaciones \n          que ayuden a promocionar la aplicación lanzada al mercado con la finalidad de que las personas esten actualizadas de lo que ocurre \n          a diario en el mundo de la tecnologia. \n        </ion-card-content>\n\n      </ion-card>\n\n        \n    </ion-card-content>\n\n\n    <div align=\"center\">\n    <ion-card-content> 5. MICROSITE</ion-card-content>\n    <img src=\"https://guellcom.com/wp-content/uploads/2022/04/Microsite.png\" width\n    =\"250\"height=\"250\"/></div>\n    <ion-card-content>\n    \n      <ion-card>\n       <ion-card-content>\n        Es necesario crear un microsite para la aplicación en donde se debe incluir recursos multimedia que describan gráficamente\n        la misma, ya sea videos explicativos, imágenes, información que destaque a la aplicación de otras.\n       </ion-card-content>\n      </ion-card> \n\n    \n\n\n      \n      </ion-card-content>\n\n      \n       \n     \n        \n      \n     \n    </ion-card-content>\n      \n     \n       \n</ion-card>\n  \n  <!--<ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 1 page\"></app-explore-container>-->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_wishlist_wishlist_module_ts.js.map