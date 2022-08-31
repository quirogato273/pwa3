"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 6739);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 9456)).then(m => m.LoginPageModule)
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 794);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 6739);







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 6739:
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 5531);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 6959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AuthPage = class AuthPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthPage.ctorParameters = () => [];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-auth',
        template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



/***/ }),

/***/ 6959:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-dark) url('leaves.jpg') no-repeat center center/cover;\n}\n\nion-list {\n  transform: translateY(15vh);\n  background: transparent;\n}\n\nion-list img {\n  background: white;\n  height: 20vh;\n  border-radius: 50%;\n  margin-bottom: 8vh;\n}\n\nion-list ion-button {\n  font-weight: bold;\n  text-transform: none;\n  margin: 5vh;\n}\n\nion-list p {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUZBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFTSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBUE47O0FBU0k7RUFDRSxpQkFBQTtBQVBOIiwiZmlsZSI6ImF1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvbGVhdmVzLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICB9XG4gIFxuICBpb24tbGlzdCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1dmgpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGltZyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHZoO1xuICAgIH1cbiAgICAvLyBpb24tbGlzdC1oZWFkZXIge1xuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcbiAgICAvLyAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgLy8gICBpb24tbGFiZWwge1xuICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIC8vICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBtYXJnaW46IDV2aDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gIH0iXX0= */";

/***/ }),

/***/ 5531:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/auth.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-list class=\"ion-margin ion-text-center\">\n    <img src=\"assets/imgs/nature love.png\" />\n    <!-- <ion-list-header><ion-label color=\"light\">LOGO</ion-label></ion-list-header> -->\n    <ion-button color=\"white\" expand=\"block\" shape=\"round\" routerLink=\"login\">Login with Username</ion-button>\n    <ion-button color=\"white\" expand=\"block\" shape=\"round\">Login with Google</ion-button>\n    <ion-text color=\"white\"><p>New User? Sign up.</p></ion-text>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts.js.map