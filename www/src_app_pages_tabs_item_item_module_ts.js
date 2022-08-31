"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_item_item_module_ts"],{

/***/ 9087:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/item/item-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPageRoutingModule": () => (/* binding */ ItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.page */ 2806);




const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_0__.ItemPage
    }
];
let ItemPageRoutingModule = class ItemPageRoutingModule {
};
ItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemPageRoutingModule);



/***/ }),

/***/ 2614:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/item/item.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPageModule": () => (/* binding */ ItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-routing.module */ 9087);
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.page */ 2806);







let ItemPageModule = class ItemPageModule {
};
ItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemPageRoutingModule
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_1__.ItemPage]
    })
], ItemPageModule);



/***/ }),

/***/ 2806:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/item/item.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPage": () => (/* binding */ ItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.page.html?ngResource */ 8241);
/* harmony import */ var _item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.page.scss?ngResource */ 9313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3910);








let ItemPage = class ItemPage {
    constructor(navCtrl, route, apiService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(paramMap => {
            console.log(paramMap);
            if (!paramMap.has('id')) {
                this.navCtrl.back();
                return;
            }
            const id = paramMap.get('id');
            console.log(id);
            this.item = this.apiService.getItem(id);
            console.log(this.item);
        });
    }
};
ItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-item',
        template: _item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemPage);



/***/ }),

/***/ 9313:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/item/item.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-grid {\n  padding: 0;\n}\nion-content ion-grid ion-row {\n  height: 70vh;\n}\nion-content ion-grid ion-row ion-col {\n  padding: 0;\n}\nion-content ion-grid ion-row ion-col ion-slides {\n  height: 100%;\n  --bullet-background: var(--ion-color-medium);\n  --bullet-background-active: var(--ion-color-primary-contrast);\n  border-radius: 40px 0 0 40px;\n}\nion-content ion-grid ion-row ion-col ion-slides img {\n  width: 100%;\n  height: 100%;\n  background: var(--ion-color-tertiary);\n}\nion-content ion-grid ion-row ion-col div ion-button {\n  margin-top: 5vh;\n}\nion-content ion-grid ion-row ion-col div ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content ion-item ion-label {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\nion-content ion-item .price {\n  align-self: end;\n  margin-top: 15px;\n  font-size: 1.2rem;\n}\nion-footer .buy {\n  background: var(--ion-color-primary);\n  border-radius: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFBWTtFQUNJLFVBQUE7QUFFaEI7QUFEZ0I7RUFDSSxZQUFBO0VBQ0EsNENBQUE7RUFDQSw2REFBQTtFQUNBLDRCQUFBO0FBR3BCO0FBRm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQUl4QjtBQUFvQjtFQUNJLGVBQUE7QUFFeEI7QUFEd0I7RUFDSSxlQUFBO0FBRzVCO0FBS1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFTSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUFOUiIsImZpbGUiOiJpdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICAuYnV5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAwO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 8241:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/item/item.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-button fill=\"clear\" class=\"ion-margin\" (click)=\"navCtrl.back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"dark\"></ion-icon>\n        </ion-button>\n\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-slides pager=\"true\">\n          <ion-slide *ngFor=\"let item1 of [1, 2]\">\n            <img [src]=\"item?.img\" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item lines=\"none\" class=\"ion-margin-vertical\">\n    <ion-label>\n      {{item?.name}}\n      <p><ion-text color=\"tertiary\">{{item?.category}}</ion-text></p>\n    </ion-label>\n\n  </ion-item>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_item_item_module_ts.js.map