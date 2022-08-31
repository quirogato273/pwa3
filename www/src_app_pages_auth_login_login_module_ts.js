"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 5221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 7412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5221);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 7412);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 7412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6579);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 1191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 1191:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "#bg {\n  height: 50%;\n  width: 500px;\n  background: var(--ion-color-dark) url('leaves.jpg') no-repeat center center/cover;\n  border-radius: 0 0 45% 45%;\n  margin-left: -21vw;\n  position: relative;\n}\n\nion-fab ion-icon {\n  font-size: 2.5rem;\n}\n\nion-list {\n  margin-top: 6vh;\n}\n\nion-list ion-list-header {\n  font-weight: 1000;\n  font-size: 1.5rem;\n}\n\nion-list ion-item {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 20px;\n  box-shadow: 0 6px 4px -4px var(--ion-color-medium);\n}\n\nion-list p {\n  font-size: 0.8rem;\n  padding-left: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUZBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUNJLGlCQUFBO0FBQ1I7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBQ0k7RUFDSSx3Q0FBQTtFQUNBLG1CQUFBO0VBR0Esa0RBQUE7QUFDUjs7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDUiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmcge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9sZWF2ZXMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDQ1JSA0NSU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMXZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1mYWIge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogNnZoO1xuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDRweCAtNHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDRweCAtNHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCA0cHggLTRweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 6579:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <div id=\"bg\">\n    <ion-fab vertical=\"bottom\" edge horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button color=\"white\" routerLink=\"/auth\">\n        <ion-icon name=\"close-outline\" color=\"medium\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <ion-list lines=\"none\" class=\"ion-margin\">\n    <ion-list-header>WELCOME !</ion-list-header>\n    <ion-item class=\"ion-margin\">\n      <ion-input placeholder=\"Enter Username\" type=\"text\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin\">\n      <ion-input placeholder=\"Enter Password\" type=\"password\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <ion-text color=\"medium\"><p class=\"ion-margin-horizontal\">Forgot Password?</p></ion-text>\n    <div align=\"right\">\n      <ion-button shape=\"round\" strong=\"true\" class=\"ion-margin-end\" color=\"plant\">\n        SIGN IN\n        <ion-icon name=\"log-in\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map