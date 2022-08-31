"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_account_account_module_ts"],{

/***/ 3899:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/account/account-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 9887);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 4123:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/account/account.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 3899);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 9887);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 9887:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 6786);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 8284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);





let AccountPage = class AccountPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.slideOpts = {
            slidesPerView: 2.2,
        };
        this.slideOpts1 = {
            slidesPerView: 1.3,
        };
        this.popularItems = [];
        this.featuredItems = [];
    }
    ngOnInit() {
        this.popularItems = this.apiService.items;
        this.featuredItems = this.apiService.items;
    }
};
AccountPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-account',
        template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 8284:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-list {\n  background: var(--ion-color-primary);\n  border-radius: 0 0 20px 20px;\n  padding-bottom: 7vh;\n}\nion-header ion-list ion-item ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n  letter-spacing: 0.5px;\n}\nion-header ion-list ion-item ion-avatar {\n  background: white;\n}\nion-header .popover {\n  margin: 0 8px;\n}\nion-header .popover ion-searchbar {\n  --border-radius: 20px;\n  margin-top: -30px;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content .title {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-dark);\n}\nion-content ion-slides ion-card {\n  height: 30vh;\n  width: 100%;\n  border-radius: 10px;\n}\nion-content ion-slides ion-card ion-card-header ion-label, ion-content ion-slides ion-card ion-card-header p {\n  font-weight: bold;\n  font-size: 1rem;\n  color: var(--ion-color-dark);\n}\nion-content ion-slides ion-card ion-card-content img {\n  height: 20vh;\n}\nion-content ion-slides .bgCard {\n  background-image: url('bg.png');\n  background-position: fixed;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\nion-content ion-slides .featured {\n  height: 40vh;\n}\nion-content ion-slides .featured ion-card-header {\n  padding: 0;\n  background: var(--ion-color-tertiary);\n}\nion-content ion-slides .featured ion-card-header img {\n  height: 30vh;\n}\nion-content ion-slides .price {\n  align-self: end;\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSjtBQUFJO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUVoQjtBQUFZO0VBQ0ksaUJBQUE7QUFFaEI7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQUNRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQUNaO0FBSUE7RUFDSSxvQ0FBQTtBQURKO0FBRUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURaO0FBR2dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFEcEI7QUFLZ0I7RUFDSSxZQUFBO0FBSHBCO0FBT1E7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUxaO0FBT1E7RUFDSSxZQUFBO0FBTFo7QUFNWTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtBQUpoQjtBQUtnQjtFQUNJLFlBQUE7QUFIcEI7QUFPUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUxaIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3dmg7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvcG92ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICB9XHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJnQ2FyZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmcucG5nJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDB2aDtcclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 6786:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n\n\n    <ion-item color=\"primary\">\n      <ion-label>AUTORES</ion-label>\n\n    </ion-item>\n\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid class=\"ion-margin-top\">\n    <ion-item lines=\"none\" color=\"light\">\n      <ion-label class=\"title\"></ion-label>\n          </ion-item>\n    <ion-row>\n      <ion-slides [options]=\"slideOpts1\">\n        <ion-slide *ngFor=\"let item of featuredItems\">\n          <ion-card class=\"featured\" [routerLink]=\"['/', 'tabs', 'items', item.id]\">\n            <ion-card-header>\n              <img [src]=\"item?.img\" />              \n            </ion-card-header>\n            <ion-card-content>\n              <ion-item lines=\"none\">\n                <ion-label>\n                  {{item?.name}}\n                  <p><ion-text color=\"tertiary\">{{item?.category}}</ion-text></p>\n                </ion-label>\n                <ion-text class=\"price\" slot=\"end\" color=\"primary\"><b></b></ion-text>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_account_account_module_ts.js.map