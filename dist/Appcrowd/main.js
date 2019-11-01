(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/forgot-password/forgot-password.component */ "./src/app/shared/forgot-password/forgot-password.component.ts");
/* harmony import */ var _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/reset-password/reset-password.component */ "./src/app/shared/reset-password/reset-password.component.ts");
/* harmony import */ var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/dashboard/dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/reports/reports.component */ "./src/app/layout/reports/reports.component.ts");
/* harmony import */ var _layout_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/profile/profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/edit-profile/edit-profile.component */ "./src/app/layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var _layout_chang_password_chang_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/chang-password/chang-password.component */ "./src/app/layout/chang-password/chang-password.component.ts");
/* harmony import */ var _layout_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/user-management/user-management.component */ "./src/app/layout/user-management/user-management.component.ts");
/* harmony import */ var _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/settings/settings.component */ "./src/app/layout/settings/settings.component.ts");
/* harmony import */ var _layout_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/content-management/content-management.component */ "./src/app/layout/content-management/content-management.component.ts");
/* harmony import */ var _layout_bodysystem_bodysystem_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/bodysystem/bodysystem.component */ "./src/app/layout/bodysystem/bodysystem.component.ts");
/* harmony import */ var _shared_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/verify-otp/verify-otp.component */ "./src/app/shared/verify-otp/verify-otp.component.ts");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth.guard.service */ "./src/app/shared/services/auth.guard.service.ts");

















var routes = [
    { path: '', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'forgot-password', component: _shared_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] },
    { path: 'VerifyOtp', component: _shared_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_15__["VerifyOtpComponent"] },
    { path: 'reset-password', component: _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
    { path: 'content_management', component: _layout_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_13__["ContentManagementComponent"] },
    { path: 'dashboard', component: _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'reports', component: _layout_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'profile', component: _layout_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'edit-profile', component: _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'change-password', component: _layout_chang_password_chang_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangPasswordComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'setting', component: _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'user-management', component: _layout_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_11__["UserManagementComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'body system', component: _layout_bodysystem_bodysystem_component__WEBPACK_IMPORTED_MODULE_14__["BodysystemComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'paki-taxi-admin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _common_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/left-sidebar/left-sidebar.component */ "./src/app/common/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/forgot-password/forgot-password.component */ "./src/app/shared/forgot-password/forgot-password.component.ts");
/* harmony import */ var _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/reset-password/reset-password.component */ "./src/app/shared/reset-password/reset-password.component.ts");
/* harmony import */ var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/dashboard/dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/reports/reports.component */ "./src/app/layout/reports/reports.component.ts");
/* harmony import */ var _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/settings/settings.component */ "./src/app/layout/settings/settings.component.ts");
/* harmony import */ var _layout_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/profile/profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/edit-profile/edit-profile.component */ "./src/app/layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var _layout_chang_password_chang_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/chang-password/chang-password.component */ "./src/app/layout/chang-password/chang-password.component.ts");
/* harmony import */ var _layout_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/user-management/user-management.component */ "./src/app/layout/user-management/user-management.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/auth.interceptor */ "./src/app/shared/services/auth.interceptor.ts");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _layout_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layout/content-management/content-management.component */ "./src/app/layout/content-management/content-management.component.ts");
/* harmony import */ var _layout_bodysystem_bodysystem_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout/bodysystem/bodysystem.component */ "./src/app/layout/bodysystem/bodysystem.component.ts");
/* harmony import */ var _shared_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/verify-otp/verify-otp.component */ "./src/app/shared/verify-otp/verify-otp.component.ts");


















// import { ChartsModule } from 'ng2-charts';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _common_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["LeftSidebarComponent"],
                _shared_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _shared_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"],
                _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _layout_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"],
                _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _layout_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
                _layout_chang_password_chang_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangPasswordComponent"],
                _layout_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_17__["UserManagementComponent"],
                _layout_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_26__["ContentManagementComponent"],
                _layout_bodysystem_bodysystem_component__WEBPACK_IMPORTED_MODULE_27__["BodysystemComponent"],
                _shared_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_28__["VerifyOtpComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_23__["CKEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"]
                // ChartsModule
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptor"],
                    multi: true
                },
                _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_25__["ExcelService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-footer\">\n    <div class=\"layout-footer-body\">\n        <small class=\"copyright\">2019 &copy; Timeless Medicine</small>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header{\n    background-color: #e8e8e8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-header\">\n    <div class=\"navbar navbar-default\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand navbar-brand-center\" routerLink=\"/dashboard\">\n          <img class=\"navbar-brand-logo\" src=\"assets/img/logo-1.png\" alt=\"Elephant\">\n        </a>\n        <button class=\"navbar-toggler visible-xs-block collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"bars\">\n            <span class=\"bar-line bar-line-1 out\"></span>\n            <span class=\"bar-line bar-line-2 out\"></span>\n            <span class=\"bar-line bar-line-3 out\"></span>\n          </span>\n          <span class=\"bars bars-x\">\n            <span class=\"bar-line bar-line-4\"></span>\n            <span class=\"bar-line bar-line-5\"></span>\n          </span>\n        </button>\n        <button class=\"navbar-toggler visible-xs-block collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"arrow-up\"></span>\n          <span class=\"ellipsis ellipsis-vertical\">\n            <img class=\"ellipsis-object\" width=\"32\" height=\"32\" src=\"assets/img/0180441436.jpg\" alt=\"Teddy Wilson\">\n          </span>\n        </button>\n      </div>\n      <div class=\"navbar-toggleable\">\n        <nav id=\"navbar\" class=\"navbar-collapse collapse\">\n          <button class=\"sidenav-toggler hidden-xs\" title=\"Collapse sidenav ( [ )\" aria-expanded=\"true\" type=\"button\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"bars\">\n              <span class=\"bar-line bar-line-1 out\"></span>\n              <span class=\"bar-line bar-line-2 out\"></span>\n              <span class=\"bar-line bar-line-3 out\"></span>\n              <span class=\"bar-line bar-line-4 in\"></span>\n              <span class=\"bar-line bar-line-5 in\"></span>\n              <span class=\"bar-line bar-line-6 in\"></span>\n            </span>\n          </button>\n          <ul class=\"nav navbar-nav navbar-right\">\n            \n            <li class=\"dropdown\">\n              <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\">\n                <span class=\"icon-with-child hidden-xs\">\n                  <span class=\"icon icon-bell-o icon-lg\"></span>\n                  <span class=\"badge badge-danger badge-above right\">7</span>\n                </span>\n                <span class=\"visible-xs-block\">\n                  <span class=\"icon icon-bell icon-lg icon-fw\"></span>\n                  <span class=\"badge badge-danger pull-right\">7</span>\n                  Notifications\n                </span>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\">\n                <div class=\"dropdown-header\">\n                  \n                  <h5 class=\"dropdown-heading\">Recent Notifications</h5>\n                </div>\n                <div class=\"dropdown-body\">\n                  <div class=\"list-group list-group-divided custom-scrollbar\">\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <span class=\"icon icon-exclamation-triangle bg-warning rounded sq-40\"></span>\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">35 min</small>\n                          <h5 class=\"notification-heading\">Update Status</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">Failed to get available update data. To ensure the proper functioning of your application, update now.</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <span class=\"icon icon-flag bg-success rounded sq-40\"></span>\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">43 min</small>\n                          <h5 class=\"notification-heading\">Account Contact Change</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">A contact detail associated with your account teddy.wilson, has recently changed.</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <span class=\"icon icon-exclamation-triangle bg-warning rounded sq-40\"></span>\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">1 hr</small>\n                          <h5 class=\"notification-heading\">Failed Login Warning</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">There was a failed login attempt from \"192.98.19.164\" into the account teddy.wilson.</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <img class=\"rounded\" width=\"40\" height=\"40\" src=\"assets/img/0310728269.jpg\" alt=\"Daniel Taylor\">\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">4 hr</small>\n                          <h5 class=\"notification-heading\">Daniel Taylor</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">Like your post: \"Everything you know about Bootstrap is wrong\".</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <img class=\"rounded\" width=\"40\" height=\"40\" src=\"assets/img/0872116906.jpg\" alt=\"Emma Lewis\">\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">8 hr</small>\n                          <h5 class=\"notification-heading\">Emma Lewis</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">Like your post: \"Everything you know about Bootstrap is wrong\".</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <img class=\"rounded\" width=\"40\" height=\"40\" src=\"assets/img/0601274412.jpg\" alt=\"Sophia Evans\">\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">8 hr</small>\n                          <h5 class=\"notification-heading\">Sophia Evans</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">Like your post: \"Everything you know about Bootstrap is wrong\".</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                    <a class=\"list-group-item\" href=\"#\">\n                      <div class=\"notification\">\n                        <div class=\"notification-media\">\n                          <img class=\"rounded\" width=\"40\" height=\"40\" src=\"assets/img/0180441436.jpg\" alt=\"Teddy Wilson\">\n                        </div>\n                        <div class=\"notification-content\">\n                          <small class=\"notification-timestamp\">9 hr</small>\n                          <h5 class=\"notification-heading\">{{adminData.First_Name}} {{adminData.Last_Name}}</h5>\n                          <p class=\"notification-text\">\n                            <small class=\"truncate\">Published a new post: \"Everything you know about Bootstrap is wrong\".</small>\n                          </p>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                </div>\n                <div class=\"dropdown-footer\">\n                  <a class=\"dropdown-btn\" href=\"#\">See All</a>\n                </div>\n              </div>\n            </li>\n            <li class=\"dropdown hidden-xs\">\n              <button class=\"navbar-account-btn\" data-toggle=\"dropdown\" aria-haspopup=\"true\">\n                <img class=\"rounded\" width=\"36\" height=\"36\" src=\"{{ImageUrl}}\" />&nbsp;&nbsp;{{adminData.First_Name}} {{adminData.Last_Name}}\n                <span class=\"caret\"></span>\n              </button>\n              <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li><a routerLink=\"/profile\">Profile</a></li>\n                <li><a routerLink=\"/change-password\">Change Password</a></li>\n                <li><a (click)=\"logout()\">Sign out</a></li>\n              </ul>\n            </li>\n\n            <li class=\"visible-xs-block\">\n              <a routerLink=\"/profile\">\n                <span class=\"icon icon-user icon-lg icon-fw\"></span>\n                Profile\n              </a>\n            </li>\n            <li class=\"visible-xs-block\">\n              <a routerLink=\"/login\">\n                <span class=\"icon icon-power-off icon-lg icon-fw\"></span>\n                Sign out\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(api, utils, router) {
        this.api = api;
        this.utils = utils;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        $('.sidenav-toggler').on('click', function () {
            $(this).toggleClass('collapsed');
            $('.sidenav-collapse .sidenav').toggleClass('sidenav-collapsed');
            $('body').toggleClass('layout-sidebar-collapsed');
            if ($(this).hasClass('collapsed')) {
                $(this).attr('title', 'Expand sidenav');
            }
            else {
                $(this).attr('title', 'Collapse sidenav');
            }
        });
        this.utils.profileStatus.subscribe(function (data) {
            _this.adminData = _this.utils.get('appcrowd_admin_data');
            _this.ImageUrl = _this.adminData.profile_image ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "" + _this.adminData.profile_image + "?" + new Date().getTime() : 'assets/img/8447261358.jpg';
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        var admin = this.utils.get('appcrowd_admin_data');
        this.api.logout({
            id: admin._id
        }).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            _this.router.navigate(['/login']);
            _this.utils.removeData('appcrowd_admin_data');
        }, function (error) {
            console.log(error);
            if (error['status'] == 400) {
                _this.router.navigate(['/login']);
                _this.utils.removeData('appcrowd_admin_data');
            }
            debugger;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/left-sidebar/left-sidebar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/common/left-sidebar/left-sidebar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/left-sidebar/left-sidebar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/left-sidebar/left-sidebar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-sidebar\">\n  <div class=\"layout-sidebar-backdrop\"></div>\n  <div class=\"layout-sidebar-body\">\n    <div class=\"custom-scrollbar\">\n      <nav id=\"sidenav\" class=\"sidenav-collapse collapse\">\n        <ul class=\"sidenav\">\n          <li class=\"sidenav-heading\">Navigation</li>\n          <li class=\"sidenav-item dashboardPageNav\" routerLinkActive='active'>\n            <a routerLink=\"/dashboard\" aria-haspopup=\"true\">\n              <span class=\"sidenav-icon icon icon-home\"></span>\n              <span class=\"sidenav-label\">Dashboard</span>\n            </a>\n          </li>\n           <li class=\"sidenav-item subadminPageNav\" routerLinkActive='active'>\n              <a routerLink=\"/user-management\" aria-haspopup=\"true\">\n                <span class=\"sidenav-icon icon icon-users\"></span>\n                <span class=\"sidenav-label\">User Management</span>\n              </a>\n          </li> \n          <!-- <li class=\"sidenav-item subadminPageNav\" routerLinkActive='active'>\n            <a routerLink=\"/content_management\" aria-haspopup=\"true\">\n              <span class=\"sidenav-icon icon icon-users\"></span>\n              <span class=\"sidenav-label\">Content Management</span>\n            </a>\n          </li>\n\n          \n          <li class=\"reportsPageNav\" routerLinkActive='active'>\n              <a routerLink=\"/reports\" aria-haspopup=\"true\">\n                <span class=\"sidenav-icon icon icon-list\"></span>\n                <span class=\"sidenav-label\">Report Generation</span>\n              </a>\n          </li>\n          <li class=\"sidenav-item settingsPageNav\" routerLinkActive='active'>\n              <a routerLink=\"/setting\" aria-haspopup=\"true\">\n                <span class=\"sidenav-icon icon icon-cog\"></span>\n                <span class=\"sidenav-label\">Settings</span>\n              </a>\n          </li> -->\n      </ul>\n      </nav>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/left-sidebar/left-sidebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/left-sidebar/left-sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent() {
    }
    LeftSidebarComponent.prototype.ngOnInit = function () {
        // For Driver Page
        // if ( $('.dashboardPage').length ) {
        //   $('.sidenav-item').removeClass("active");
        //   $('.dashboardPageNav').addClass("active");
        // }
        // if ( $('.subadminPage').length ) {
        //   $('.sidenav-item').removeClass("active");
        //   $('.subadminPageNav').addClass("active");
        // }
        // if( $('.reportsPage').length ) {
        //   $('.sidenav-item').removeClass("active");
        //   $('.reportsPageNav').addClass("active");
        // }
        // if( $('.settingsPage').length ) {
        //   $('.sidenav-item').removeClass("active");
        //   $('.settingsPageNav').addClass("active");
        // }
        // $('.sidenav-collapse .sidenav').toggleClass('sidenav-collapsed');
        $('.sidenav-collapse .sidenav li a').click(function () {
            if ($('body').hasClass('layout-sidebar-collapsed')) {
                $('.sidenav-collapse .sidenav').addClass('sidenav-collapsed');
            }
            else {
                $('.sidenav-collapse .sidenav').removeClass('sidenav-collapsed');
            }
        });
        // $('.has-subnav > a').on('click', function(){
        //   $(this).parent('li').toggleClass('open');
        //   $(this).next('ul').toggleClass('collapse');
        //   $(this).next('ul').slideToggle('');
        // });
        // $('.sidenav-toggler').on('click', function(){
        //   $('body').toggleClass('layout-sidebar-collapsed');
        //   $('.sidenav-collapse').toggleClass('sidenav-collapsed');
        //   $('.sidenav-collapse').toggleClass('collapse');
        // });
        //  $('.has-subnav > a').click(function(){
        //   if($('body').hasClass('layout-sidebar-collapsed')){
        //     $(this).closest('.has-subnav').toggleClass('active');
        //     $(this).next('ul').slideToggle('');
        //   }else{
        //     $(this).click('disabled', true);
        //   }
        // });
    };
    LeftSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-sidebar',
            template: __webpack_require__(/*! ./left-sidebar.component.html */ "./src/app/common/left-sidebar/left-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar.component.css */ "./src/app/common/left-sidebar/left-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/bodysystem/bodysystem.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/bodysystem/bodysystem.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JvZHlzeXN0ZW0vYm9keXN5c3RlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2JvZHlzeXN0ZW0vYm9keXN5c3RlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/bodysystem/bodysystem.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/bodysystem/bodysystem.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <span class=\"d-ib\">Ailment</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <div class=\"card-actions\">\n                  <!-- <button type=\"button\" class=\"card-action card-toggler\" title=\"Collapse\"></button>\n                              <button type=\"button\" class=\"card-action card-reload\" title=\"Reload\"></button> -->\n\n                </div>\n                <strong>Ailment List</strong>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\" style=\"margin-bottom: 10px;\">\n                  <div class=\"col-md-9\">\n\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" type=\"search\" placeholder=\"search...\" />\n                    <!-- <div class=\"xsl\">\n                              <button class=\"btn btn-info btn-sm btn-labeled f-16\" type=\"button\" data-toggle=\"modal\" data-target=\"#addUser\" (click)=\"addNewEmployee()\">\n                                Add Employee\n                              </button>\n                            </div> -->\n                  </div>\n                </div>\n\n                <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n                  <!-- Position Column -->\n                  <ng-container matColumnDef=\"position\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> S. No. </th>\n                    <!-- <td mat-cell *matCellDef=\"let element; let i = index\"> {{i+1}} </td> -->\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Email ID </th>\n                    <!-- <td mat-cell *matCellDef=\"let element\"> {{element.email_id}}</td> -->\n                  </ng-container>\n\n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"description\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <!-- <td mat-cell *matCellDef=\"let element\"> {{element.first_Name}} {{element.last_name}}</td> -->\n                  </ng-container>\n\n                  <!-- Weight Column -->\n                  <ng-container matColumnDef=\"supporting_product\">\n                    <th mat-header-cell *matHeaderCellDef> User ID </th>\n                    <!-- <td mat-cell *matCellDef=\"let element\"> {{element.unique_id}} </td> -->\n                  </ng-container>\n\n                  <!-- Symbol Column -->\n                  <ng-container matColumnDef=\"body_system\">\n                    <th mat-header-cell *matHeaderCellDef> Refer ID. </th>\n                    <!-- <td mat-cell *matCellDef=\"let element\"> {{element.refercode}} </td> -->\n                  </ng-container>\n\n                  <!-- <ng-container matColumnDef=\"country\">\n                    <th mat-header-cell *matHeaderCellDef> Country </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.is_country}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\n                    <td mat-cell *matCellDef=\"let element\"><span [ngClass]=\"{'text-danger': element.is_blocked, 'text-success': !element.is_blocked}\">\n                        {{element.is_blocked ? \"Blocked\" : \"Unblocked\"}} </span></td>\n                  </ng-container> -->\n\n                  <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      <!-- <button class=\"btn btn-success btn-sm btn-labeled\" type=\"button\" data-toggle=\"modal\" data-target=\"#addUser\" (click)=\"selectEditUser(element)\">\n                                    <span class=\"btn-label\">\n                                    <i class=\"fa fa-edit icon-lg icon-fw\" aria-hidden=\"true\"></i>\n                                    </span>\n                                    Edit\n                                </button> -->\n                      <button class=\"btn btn-sm btn-labeled\" [ngClass]=\"{'btn-info': element.is_block, 'btn-warning': !element.is_block}\"\n                        type=\"button\" data-toggle=\"modal\" data-target=\"#blockUser\" (click)=\"selectBlockUser(element)\">\n                        <span class=\"btn-label\">\n                          <i class=\"fa fa-ban f-16\" aria-hidden=\"true\"></i>\n                        </span>\n                        {{element.is_blocked ? 'Unblock' : 'Block'}}\n                      </button>\n                      <button class=\"btn btn-danger btn-sm btn-labeled\" type=\"button\" data-toggle=\"modal\" data-target=\"#deleteUser\"\n                        (click)=\"selectDeleteUser(element)\">\n                        <span class=\"btn-label\">\n                          <i class=\"fa fa-trash icon-lg icon-fw\"></i>\n                        </span>\n                        Delete\n                      </button>\n                      <!-- <label class=\"switch\">\n                                    <input type=\"checkbox\" checked>\n                                    <span class=\"slider round\"></span>\n                                </label> -->\n                    </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/bodysystem/bodysystem.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/bodysystem/bodysystem.component.ts ***!
  \***********************************************************/
/*! exports provided: BodysystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodysystemComponent", function() { return BodysystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var BodysystemComponent = /** @class */ (function () {
    function BodysystemComponent() {
        this.displayedColumns = ['position', 'name', 'description', 'supporting_product', 'body_system', 'action'];
        this.Userlist = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.Userlist);
    }
    BodysystemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BodysystemComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], BodysystemComponent.prototype, "sort", void 0);
    BodysystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bodysystem',
            template: __webpack_require__(/*! ./bodysystem.component.html */ "./src/app/layout/bodysystem/bodysystem.component.html"),
            styles: [__webpack_require__(/*! ./bodysystem.component.css */ "./src/app/layout/bodysystem/bodysystem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BodysystemComponent);
    return BodysystemComponent;
}());



/***/ }),

/***/ "./src/app/layout/chang-password/chang-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/chang-password/chang-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFuZy1wYXNzd29yZC9jaGFuZy1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/chang-password/chang-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/chang-password/chang-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"profilePage\"></div>\n    <div class=\"layout-content\">\n        <div class=\"layout-content-body\">\n            <div class=\"title-bar\">\n                <h1 class=\"title-bar-title\">\n                  <span class=\"d-ib\">Change Password </span>\n                  <!-- <a href=>Back</a> -->\n                </h1>\n            </div>\n            <div class=\"row gutter-xs\">\n                <div class=\"col-md-8 card panel-body\" id=\"\">\n                    <div class=\"col-sm-12 col-md-12\">\n                        <div class=\"demo-form-wrapper\">\n                            <form class=\"form form-horizontal\" [formGroup]=\"changePassword\">\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-8\">\n                                        <label for=\"\" class=\"control-label\">Old Password</label>\n                                        <input formControlName=\"old_password\" class=\"form-control\" type=\"password\" [ngClass]=\"{'is-invalid': submitted && f.old_password.errors}\">\n                                        <div *ngIf=\"submitted && f.old_password.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"submitted && f.old_password.errors.required\">Old password is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-8\">\n                                        <label for=\"\" class=\" control-label\">New Password</label>\n                                        <input formControlName=\"new_password\" minlength=\"6\" class=\"form-control\" type=\"password\" [ngClass]=\"{'is-invalid': submitted && f.new_password.errors}\">\n                                        <div *ngIf=\"submitted && f.new_password.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"submitted && f.new_password.errors.required\">New password is required</div>\n                                            <div *ngIf=\"submitted && f.new_password.errors.minlength\">New password must contains 6 characters.</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-8\">\n                                        <label for=\"\" class=\" control-label\">Confirm Password</label>\n                                        <input formControlName=\"confirm_password\" class=\"form-control\" type=\"password\" [ngClass]=\"{'is-invalid': submitted && f.confirm_password.errors}\">\n                                        <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"submitted && f.confirm_password.errors.required\">Confirm password is required</div>\n                                            <div *ngIf=\"submitted && f.confirm_password.errors.mustMatch\">Password not matched</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\" col-sm-8  col-md-8 \">\n                                        <button class=\"btn btn-primary btn-block \" type=\"submit\" (click)=\"submit()\">Submit</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/layout/chang-password/chang-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/chang-password/chang-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangPasswordComponent", function() { return ChangPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ChangPasswordComponent = /** @class */ (function () {
    function ChangPasswordComponent(utils, fb, api, router) {
        this.utils = utils;
        this.api = api;
        this.router = router;
        this.submitted = false;
        this.changePassword = fb.group({
            old_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.MustRePassMatch('new_password', 'confirm_password')
        });
    }
    ChangPasswordComponent.prototype.ngOnInit = function () {
        this.utils.scrollToTop();
    };
    Object.defineProperty(ChangPasswordComponent.prototype, "f", {
        get: function () { return this.changePassword.controls; },
        enumerable: true,
        configurable: true
    });
    ChangPasswordComponent.prototype.submit = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        if (this.changePassword.invalid)
            return;
        var dataToSend = {
            old_password: this.changePassword.value.old_password,
            new_password: this.changePassword.value.new_password
        };
        this.api.changePassword(dataToSend).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log(error);
            _this.utils.alert('error', error['error']['message']);
            if (error['status'] == 400) {
                _this.router.navigate(['/login']);
                _this.utils.removeData('appcrowd_admin_data');
            }
            debugger;
        });
    };
    ChangPasswordComponent.prototype.MustRePassMatch = function (controlRePassName, matchingRePassControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlRePassName];
            var matchingRePassControl = formGroup.controls[matchingRePassControlName];
            if (matchingRePassControl.errors && !matchingRePassControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingRePassControl.value) {
                matchingRePassControl.setErrors({ mustMatch: true });
            }
            else {
                matchingRePassControl.setErrors(null);
            }
        };
    };
    ChangPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chang-password',
            template: __webpack_require__(/*! ./chang-password.component.html */ "./src/app/layout/chang-password/chang-password.component.html"),
            styles: [__webpack_require__(/*! ./chang-password.component.css */ "./src/app/layout/chang-password/chang-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ChangPasswordComponent);
    return ChangPasswordComponent;
}());



/***/ }),

/***/ "./src/app/layout/content-management/content-management.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/content-management/content-management.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb250ZW50LW1hbmFnZW1lbnQvY29udGVudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/content-management/content-management.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content-management/content-management.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar margin-bottom-40\">\n          <h1 class=\"title-bar-title\">\n            <span class=\"d-ib\">Content Management</span>\n          </h1>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\" *ngFor=\"let element of contentlist\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">{{element.count}}</span>\n                <h4 class=\"text-uppercase\">{{element.content_name}}</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\" (click)=\"getdata(element)\"><i class=\"fa fa-eye text-primary\" ></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\" (click)=\"getroutingdata(element)\"></i></a>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Symstoms</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Remedies</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Oils</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Blends</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Supplement</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Property</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-4 col-md-3 margin-bottom-30\">\n            <div class=\"card rounded-5 border-1\">\n              <div class=\"card-body\">\n                <span class=\"btn btn-sm btn-danger pos-right-top-12 rounded-5\">45</span>\n                <h4 class=\"text-uppercase\">Body system</h4>\n                <p></p>\n              </div>\n              <div class=\"card-footer text-center bg-secondary\">\n                <a class=\"pull-right fs-20 margin-left-10\"><i class=\"fa fa-eye text-primary\"></i></a>\n                <a class=\"pull-right fs-20\"><i class=\"fa fa-plus-circle text-success\"></i></a>\n              </div>\n            </div>\n          </div> -->\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/content-management/content-management.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content-management/content-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManagementComponent", function() { return ContentManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ContentManagementComponent = /** @class */ (function () {
    function ContentManagementComponent(api, fb, utils, router) {
        this.api = api;
        this.utils = utils;
        this.router = router;
    }
    ContentManagementComponent.prototype.ngOnInit = function () {
        this.getcontentList();
    };
    ContentManagementComponent.prototype.getcontentList = function () {
        var _this = this;
        this.api.getcontent().subscribe(function (data) {
            _this.contentlist = data['response'];
        }, function (error) {
            _this.utils.alert('error', error['error']['message']);
        });
    };
    ContentManagementComponent.prototype.getdata = function (data) {
        this.routername = data.content_name.toLowerCase();
        console.log(this.routername);
        this.router.navigate(['/' + this.routername]);
    };
    ContentManagementComponent.prototype.getroutingdata = function (data) {
        debugger;
        this.pathname = data.content_name.toLowerCase();
        if (this.pathname == 'oils') {
            this.router.navigate(['/addoil']);
        }
        if (this.pathname == 'blends') {
            this.router.navigate(['/addBlends']);
        }
        if (this.pathname == 'supplements') {
            this.router.navigate(['/addSupplement']);
        }
        if (this.pathname == 'properties') {
            this.router.navigate(['/addproperty']);
        }
    };
    ContentManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-management',
            template: __webpack_require__(/*! ./content-management.component.html */ "./src/app/layout/content-management/content-management.component.html"),
            styles: [__webpack_require__(/*! ./content-management.component.css */ "./src/app/layout/content-management/content-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ContentManagementComponent);
    return ContentManagementComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"dashboardPage\"></div>\n<div class=\"dashboardPage\">\n  <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n          <div class=\"title-bar\">\n              <h1 class=\"title-bar-title\">\n                <span class=\"d-ib\">Dashboard</span>\n              </h1>\n          </div>\n          <div class=\"row gutter-xs\">\n              <div class=\"col-xs-12\">\n                  <div class=\"card\">\n                      <div class=\"card-header\">\n                          <div class=\"card-actions\">\n                              <button type=\"button\" class=\"card-action card-toggler\" title=\"Collapse\"></button>\n                              <button type=\"button\" class=\"card-action card-reload\" title=\"Reload\"></button>\n\n                          </div>\n                          <strong>Report List</strong>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class='col-lg-10 col-md-9 col-sm-12 col-xs-12'></div>\n                          <div class='col-lg-2 col-md-3 col-sm-12 col-xs-12'>\n                              <div class=\"xsl\">\n                                <span><select class=\"form-control\">\n                                      <option>Daily</option>\n                                      <option>Monthly</option>\n                                      <option>Weekly</option>\n                                      <option>Yearly</option>\n                                    </select></span>\n                              </div>\n                          </div>\n                        </div>\n                          \n                          <div class=\"row gutter-xs\">\n                            <div class=\"col-md-4\">\n                              <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div id=\"chartContainer\" style=\"height: 370px; width: 100%;\"></div>\n                                         </div>\n                                    </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"card\">\n                                  <div class=\"card-body\">\n                                      <div class=\"row\">\n                                          <div class=\"col-md-12\">\n                                              <div id=\"chartContainer2\" style=\"height: 370px; width: 100%;\"></div>\n                                           </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"card\">\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <div id=\"chartContainer3\" style=\"height: 370px; width: 100%;\"></div>\n                                             </div>\n                                        </div>\n                                    </div>\n                                  </div>\n                                </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>\n<app-footer></app-footer>\n</div>\n\n<div id=\"viewSeller\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header bg-primary\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n           <h4 class=\"modal-title\">Seller full detail</h4>\n         </div>\n         <div class=\"modal-body provider-detail\">\n          <div class=\"row\">\n           <div class=\"col-md-6\">\n             <div class=\"card text-center\">\n               <div class=\"card-image\">\n                 <div class=\"overlay\">\n                 </div>\n               </div>\n               <div class=\"card-avatar text-left\">\n                 <a class=\"card-thumbnail rounded\" style=\"width: 150px;height: 160px;overflow: hidden;\" href=\"#\">\n                   <img class=\"img-responsive\" src=\"img/8447261358.jpg\" alt=\"Instagram\">\n                 </a>\n               </div>\n               <div class=\"card-body\">\n                 <h3 class=\"card-title text-left\">Seller name</h3>\n                 <p class=\"card-text text-left\">\n                   <span class=\"app-users\">\n                    <span class=\"icon icon-map-marker\"></span>\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel harum sequi,\n                     \n                   </span>\n                 </p>\n               </div>\n             </div>\n           </div>\n           <div class=\"col-md-6\">\n                 <div class=\"card\">\n                   <div class=\"card-body\">\n                     <ul class=\"media-list\">\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">Phone number</h4>\n                           <small>987862254</small>\n                         </div>\n                       </li>\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">Country</h4>\n                           <small>India</small>\n                         </div>\n                       </li>\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">City</h4>\n                           <small>Delhi</small>\n                         </div>\n                       </li>\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">Email</h4>\n                           <small>seller@gmail.com</small>\n                         </div>\n                       </li>\n                     </ul>\n                   </div>\n                 </div>\n               </div>\n          </div>\n         </div>\n         <div class=\"modal-footer\"></div>\n       </div>\n     </div>      \n   </div>\n   <div id=\"addUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header bg-primary\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n           <h4 class=\"modal-title\">Add new Subadmin</h4>\n         </div>\n         <div class=\"modal-body provider-detail\">\n          <div class=\"row\">\n           <div class=\"col-xs-12\">\n            <form class=\"form\">\n                   <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label for=\"\" class=\"control-label\">Select Region</label>\n                              <select class=\"form-control\">\n                                  <option>Choose</option>\n                                  <option>Choose</option>\n                                  <option>Choose</option>\n                                  <option>Choose</option>\n                              </select>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"\" class=\"control-label\">Select Region</label>\n                                <select class=\"form-control\">\n                                    <option>Choose</option>\n                                    <option>Choose</option>\n                                    <option>Choose</option>\n                                    <option>Choose</option>\n                                </select>\n                            </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Select User Type</label>\n                                  <div class=\"radio\">\n                                      <label>\n                                        <input type=\"radio\" name=\"message\" value=\"none\"> Admin\n                                      </label>\n                                  </div>\n                                  <div class=\"radio\">\n                                      <label>\n                                        <input type=\"radio\" name=\"message\" value=\"none\"> Subdamin\n                                      </label>\n                                  </div>\n                              </div>\n                          </div> \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">User Name</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>    \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Email</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>    \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Password</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>  \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Mobile Number</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>   \n                          <div class=\"col-md-12\">\n                              <div class=\"form-group add-membrs\">\n                                      <h5>Module rights to be given:\n                                      </h5>\n                                      <ul>\n                                        <li>\n                                             Dashboard \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Order Management\n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Account Management \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Payment Management  \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Member Management \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Report Generation  \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                               Chat Management \n                                               <label class=\"container_check\">\n                                                  <input type=\"checkbox\">\n                                                  <span class=\"checkmark\"></span>\n                                             </label>\n                                         </li>\n                                          <li>\n                                             Product Management \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                           </label> \n                                         </li>\n                                      </ul>\n                                    </div>\n                          </div>    \n                          <div class=\" col-sm-12 col-md-12\">\n                              <div class=\"form-group padding-top-10\">\n                                  <button class=\"btn btn-primary mr-5\" type=\"\" data-target=\"#unblockUser\" data-toggle=\"modal\">Add and Generate Login</button>\n                                  <button class=\"btn btn-danger\" type=\"submit\">Cancel</button>\n                              </div>\n                          </div>\n                   </div>\n             </form>  \n            </div> \n          </div>\n         </div>\n         <div class=\"modal-footer\"></div>\n       </div>\n     </div>      \n   </div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: ""
                },
                axisY: {
                    title: ""
                },
                data: [{
                        type: "column",
                        showInLegend: true,
                        legendMarkerColor: "grey",
                        legendText: "Total App Downloads: 70",
                        dataPoints: [
                            { y: 300878, label: "Venezuela" },
                            { y: 266455, label: "Saudi" },
                            { y: 169709, label: "Canada" },
                            { y: 158400, label: "Iran" },
                            { y: 142503, label: "Iraq" },
                            { y: 101500, label: "Kuwait" },
                            { y: 97800, label: "UAE" },
                            { y: 80000, label: "Russia" }
                        ]
                    }]
            });
            var chart2 = new CanvasJS.Chart("chartContainer2", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: ""
                },
                axisY: {
                    title: ""
                },
                data: [{
                        type: "column",
                        showInLegend: true,
                        legendMarkerColor: "grey",
                        legendText: "Total No. of Employees: 70",
                        dataPoints: [
                            { y: 300878, label: "Venezuela" },
                            { y: 266455, label: "Saudi" },
                            { y: 169709, label: "Canada" },
                            { y: 158400, label: "Iran" },
                            { y: 142503, label: "Iraq" },
                            { y: 101500, label: "Kuwait" },
                            { y: 97800, label: "UAE" },
                            { y: 80000, label: "Russia" }
                        ]
                    }]
            });
            var chart3 = new CanvasJS.Chart("chartContainer3", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: ""
                },
                axisY: {
                    title: ""
                },
                data: [{
                        type: "column",
                        showInLegend: true,
                        legendMarkerColor: "grey",
                        legendText: "Total Risk Assessment Sheet: 5",
                        dataPoints: [
                            { y: 300878, label: "Venezuela" },
                            { y: 266455, label: "Saudi" },
                            { y: 169709, label: "Canada" },
                            { y: 158400, label: "Iran" },
                            { y: 142503, label: "Iraq" },
                            { y: 101500, label: "Kuwait" },
                            { y: 97800, label: "UAE" },
                            { y: 80000, label: "Russia" }
                        ]
                    }]
            });
            chart.render();
            chart2.render();
            chart3.render();
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/layout/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"profilePage\"></div>\n<div class=\"layout-content\">\n    <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n\n            <h1 class=\"title-bar-title\">\n              <span class=\"d-ib\">Edit Profile </span>\n              <!-- <a href=\"profile.php\">Back to list</a> -->\n            </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n            <div class=\"col-md-8 card panel-body\" style=\"box-shadow: 0px 0px 14px #999;\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"demo-form-wrapper\">\n                        <form class=\"form form-horizontal\" [formGroup]=\"editProfile\">\n                            <div class=\"form-group\">\n                             <div class=\"col-md-6\">\n                              <label class=\" control-label\">First Name</label>\n                              <input formControlName=\"first_name\" class=\"form-control\" type=\"text\" [ngClass]=\"{'is-invalid': submitted && f.first_name.errors}\">\n                              <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\n                                  <div *ngIf=\"submitted && f.first_name.errors.required\">First name is required.</div>\n                              </div>\n                             </div>\n                             <div class=\"col-md-6\">\n                                <label class=\" control-label\">Last Name</label>\n                                <input formControlName=\"last_name\" class=\"form-control\" type=\"text\" [ngClass]=\"{'is-invalid': submitted && f.last_name.errors}\">\n                                <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.last_name.errors.required\">Last name is required.</div>\n                                </div>\n                             </div>\n                            </div>\n                            <div class=\"form-group\">\n                             <div class=\"col-md-6 add-pic\">\n                              <label class=\" control-label\">Add Images</label>\n                              <div class=\"pic-box\">\n                                <div class=\"logoImg\">\n                                 <img src=\"{{adminData.profile_image ? environment.baseUrl+'/'+adminData.profile_image : 'assets/img/3002121059.jpg'}}\" id=\"result\">\n                                <!-- id=\"profile-img\" -->\n                                 <input id='imgUpload' (change)=\"onFileChanged($event)\" type=\"file\" class=\"hide\">\n                                 <label (click)=\"openImage()\"  for=\"profile-img\" class=\"btn btn-large\"></label>\n                                </div>\n                              </div>\n                             </div>\n                             <div class=\"col-md-6\">\n                                <label class=\" control-label\">Mobile</label>\n                                <input formControlName=\"contact\" class=\"form-control\" type=\"text\" [ngClass]=\"{'is-invalid': submitted && f.contact.errors}\">\n                                <div *ngIf=\"submitted && f.contact.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.contact.errors.required\">Mobile number is required.</div>\n                                    <div *ngIf=\"submitted && f.contact.errors.minlength\">Mobile number  must be 8 digit.</div> \n                                    <div *ngIf=\"submitted && f.contact.errors.maxlength\">Mobile number is not greater than 15 digit.</div>\n                                </div>\n                             </div>\n                             <div class=\"col-md-6\">\n                                <label class=\" control-label\">Email ID</label>\n                                <input formControlName=\"email\" class=\"form-control\" type=\"text\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\">\n                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.email.errors.required\">Email id is required.</div>\n                                </div>\n                             </div>\n                             <div class=\"col-md-6\">\n                                <label class=\" control-label\">City</label>\n                                <input formControlName=\"city\" class=\"form-control\" type=\"text\">\n                                <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.city.errors.required\">city id is required.</div>\n                                </div>\n                             </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <div class=\"col-md-12\">\n                                <label for=\"about\" class=\" control-label\">Description</label>\n                                <textarea formControlName=\"description\" class=\"form-control\" rows=\"3\"></textarea>\n                              </div>\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                <div class=\" col-sm-8  col-md-8 \">\n                                    <button class=\"btn btn-primary \" type=\"submit\" (click)=\"submit()\">Submit</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(utils, fb, api, router) {
        this.utils = utils;
        this.api = api;
        this.router = router;
        this.submitted = false;
        this.adminData = this.utils.get('appcrowd_admin_data');
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.selectedFile = this.adminData.profile_image ? this.adminData.profile_image : '';
        this.editProfile = fb.group({
            first_name: [this.adminData.First_Name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            last_name: [this.adminData.Last_Name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [this.adminData.Description],
            city: [this.adminData.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: [this.adminData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            contact: [this.adminData.mobile_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]]
        });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.utils.scrollToTop();
        // $("#profile-img").change(function(e){
        //   var img = e.target.files[0];
        //   if(!iEdit.open(img, true, function(res){
        //    $("#result").attr("src", res);  
        //   })){
        //     alert("Whoops! That is not an image!");
        //   }
        // });
    };
    Object.defineProperty(EditProfileComponent.prototype, "f", {
        get: function () { return this.editProfile.controls; },
        enumerable: true,
        configurable: true
    });
    // submit(){
    //   this.submitted = true;
    //   if(this.editProfile.invalid) return;
    //   let profileImage = $("#result").attr("src");  
    //   let dataToSend = {
    //     email: this.editProfile.value.email,
    //     First_Name: this.editProfile.value.first_name,
    //     Last_Name: this.editProfile.value.last_name,
    //     mobile_number: this.editProfile.value.contact,
    //     profile_image: profileImage.includes('data:image/') ? profileImage : undefined,
    //     description: this.editProfile.value.description,
    //     city: this.editProfile.value.city,
    //   };
    //   debugger
    //   this.api.updateProfile(dataToSend).subscribe(
    //     data=> {
    //       this.utils.removeData('appcrowd_admin_data');
    //       this.utils.set('appcrowd_admin_data', data['data']);
    //       this.utils.alert('success', data['message']);
    //       this.utils.profileChanged('Changed');
    //       this.router.navigate(['/profile']);
    //     },
    //     error=> {
    //       console.log(error);
    //       this.utils.alert('error', error['error']['message']);
    //       if(error['status'] == 400){
    //         this.router.navigate(['/login']);
    //         this.utils.removeData('appcrowd_admin_data');
    //       }
    //     }
    //   );
    // }
    EditProfileComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        if (this.editProfile.invalid)
            return;
        debugger;
        var uploadData = new FormData();
        uploadData.append('profile_image', this.selectedFile ? this.selectedFile : undefined);
        uploadData.append('First_Name', this.editProfile.value.first_name ? this.editProfile.value.first_name : "N/A");
        uploadData.append('Last_Name', this.editProfile.value.last_name ? this.editProfile.value.last_name : undefined);
        uploadData.append('mobile_number', this.editProfile.value.contact ? this.editProfile.value.contact : undefined);
        uploadData.append('country', this.editProfile.value.country ? this.editProfile.value.country : "N/A");
        uploadData.append('country_code', this.editProfile.value.country_code ? this.editProfile.value.country_code : "N/A");
        uploadData.append('city', this.editProfile.value.city ? this.editProfile.value.city : undefined);
        uploadData.append('Description', this.editProfile.value.description ? this.editProfile.value.description : "N/A");
        this.api.updateProfile(uploadData).subscribe(function (data) {
            _this.utils.removeData('appcrowd_admin_data');
            _this.utils.set('appcrowd_admin_data', data['response']);
            _this.utils.alert('success', data['message']);
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log(error);
            _this.utils.alert('error', error['error']['message']);
            if (error['status'] == 400) {
                _this.router.navigate(['/login']);
                _this.utils.removeData('appcrowd_admin_data');
            }
        });
    };
    EditProfileComponent.prototype.openImage = function () {
        $('#imgUpload').click();
    };
    EditProfileComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
        if (!iEdit.open(this.selectedFile, true, function (res) {
            $("#result").attr("src", res);
        })) {
            alert("Whoops! That is not an image!");
        }
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/layout/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/layout/edit-profile/edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"profilePage\"></div>\n<div class=\"layout-content\">\n <div class=\"row gutter-xs\">\n    <div class=\"profile-box\">\n        <div class=\"card text-center\">\n          <div class=\"card-image\">\n            <div class=\"overlay\">\n              <div class=\"overlay-gradient\"> \n                <img style=\"width: 100%;height: 400px;\" class=\"card-img-top img-responsive\" [src]=\"ImageUrl\" alt=\"Instagram App\">\n              </div>\n            </div>\n          </div>\n          <div class=\"card-avatar\">\n            <a class=\"card-thumbnail rounded sq-100\">\n              <img class=\"img-responsive\" style=\"width: 100%;\" [src]=\"ImageUrl\">\n            </a>\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">{{adminData.First_Name | uppercase}} {{adminData.Last_Name | uppercase}}</h3>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n               <span class=\"icon icon-map-marker\"></span>\n               <strong>City</strong>: {{adminData.city | titlecase}}\n              </span>\n            </p>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n               <span class=\"icon icon-envelope\"></span>\n               <strong>Email</strong>: {{adminData.email}}\n              </span>\n            </p>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n               <span class=\"icon icon-phone\"></span>\n               <strong>Phone</strong>: {{adminData.mobile_number}}\n              </span>\n            </p>\n            <p class=\"card-text\">{{adminData.description}}</p>\n            <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-primary btn-sm mr-5\" type=\"button\" routerLink=\"/edit-profile\">Edit profile</button>  \n                  <button class=\"btn btn-primary btn-sm\" type=\"button\" routerLink=\"/change-password\">Change Password</button> \n           </div>\n          </div>\n        </div>\n      </div>\n </div>\n</div>\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(utils) {
        this.utils = utils;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.utils.scrollToTop();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utils.profileStatus.subscribe(function (data) {
            _this.adminData = _this.utils.get('appcrowd_admin_data');
            console.log(_this.adminData);
            _this.ImageUrl = _this.adminData.profile_image ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "" + _this.adminData.profile_image + "?" + new Date().getTime() : 'assets/img/8447261358.jpg';
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/layout/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/layout/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/reports.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/reports/reports.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/reports/reports.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"subadminPage\"></div>\n<div class=\"reportsPage\">\n  <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n          <div class=\"title-bar\">\n              <h1 class=\"title-bar-title\">\n                <span class=\"d-ib\">Report Generation</span>\n              </h1>\n          </div>\n          <div class=\"row gutter-xs\">\n              <div class=\"col-xs-12\">\n                  <div class=\"card\">\n                      <div class=\"card-header\">\n                          <div class=\"card-actions\">\n                              <button type=\"button\" class=\"card-action card-toggler\" title=\"Collapse\"></button>\n                              <button type=\"button\" class=\"card-action card-reload\" title=\"Reload\"></button>\n\n                          </div>\n                          <strong>Report List</strong>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class='col-lg-8 col-md-6 col-sm-12 col-xs-12'></div>\n                          <div class='col-lg-2 col-md-3 col-sm-6 col-xs-6'>\n                              <div class=\"xsl\">\n                                  <button class=\"btn btn-info btn-sm btn-labeled f-16\" type=\"button\">\n                                     Export to CSV\n                                  </button>\n                              </div>\n                          </div>\n                          <div class='col-lg-2 col-md-3 col-sm-6 col-xs-6'>\n                              <div class=\"xsl\">\n                                <span><select class=\"form-control\">\n                                      <option>Daily</option>\n                                      <option>Monthly</option>\n                                      <option>Weekly</option>\n                                      <option>Yearly</option>\n                                    </select></span>\n                              </div>\n                          </div>\n                        </div>\n                          \n                          <div class=\"row gutter-xs\">\n                            <div class=\"col-md-4\">\n                              <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <div class=\"paki-das\">\n                                        <h4 class=\"text-primary\"> Total App Downloads <div class=\"float-right\">\n                                          <input type=\"checkbox\" class=\"form-control\" name=\"yevo\">\n                                          \n                                          </div>\n                                    </h4>\n                                     <p>  App</p>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8\">\n                                            <div class=\"paki-das-mid\">\n                                                <div class=\"media-middle media-left\">\n                                                    <span class=\"bg-danger circle sq-64\">\n                                                      <span class=\"icon fa fa-mobile\"></span>\n                                                    </span>\n                                                  </div>\n                                             </div>\n                                         </div>\n                                       <div class=\"col-md-4\">\n                                           <div class=\"das-total text-danger\">\n                                                300\n                                           </div>\n                                       </div>\n                                    </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"card\">\n                                  <div class=\"card-body\">\n                                      <div class=\"paki-das\">\n                                          <h4 class=\"text-primary\"> Total Users<div class=\"float-right\">\n                                              <input type=\"checkbox\" class=\"form-control\" name=\"yevo\">\n                                              \n                                              </div>\n                                      </h4>\n                                       <p> Users</p>\n                                      </div>\n                                      <div class=\"row\">\n                                         <div class=\"col-md-8\">\n                                            <div class=\"paki-das-mid\">\n                                                <div class=\"media-middle media-left\">\n                                                    <span class=\"bg-success circle sq-64\">\n                                                      <span class=\"icon fa fa-users\"></span>\n                                                    </span>\n                                                  </div>\n                                             </div>\n                                         </div>\n                                         <div class=\"col-md-4\">\n                                             <div class=\"das-total text-success\">\n                                                300\n                                             </div>\n                                         </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"card\">\n                                    <div class=\"card-body\">\n                                        <div class=\"paki-das\">\n                                            <h4 class=\"text-primary\"> Total Risk Assessment Form <div class=\"float-right\">\n                                                <input type=\"checkbox\" class=\"form-control\" name=\"yevo\">\n                                                \n                                                </div>\n                                        </h4>\n                                         <p> Assessment</p>\n                                        </div>\n                                        <div class=\"row\">\n                                           <div class=\"col-md-8\">\n                                              <div class=\"paki-das-mid\">\n                                                  <span class=\"bg-info sq-64 circle\">\n                                                      <span class=\"icon icon-list\"></span>\n                                                    </span>\n                                               </div>\n                                           </div>\n                                           <div class=\"col-md-4\">\n                                               <div class=\"das-total text-info\">\n                                                    300\n                                               </div>\n                                           </div>\n                                        </div>\n                                    </div>\n                                  </div>\n                                </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>\n<app-footer></app-footer>\n</div>\n\n<div id=\"viewSeller\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header bg-primary\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n           <h4 class=\"modal-title\">Seller full detail</h4>\n         </div>\n         <div class=\"modal-body provider-detail\">\n          <div class=\"row\">\n           <div class=\"col-md-6\">\n             <div class=\"card text-center\">\n               <div class=\"card-image\">\n                 <div class=\"overlay\">\n                 </div>\n               </div>\n               <div class=\"card-avatar text-left\">\n                 <a class=\"card-thumbnail rounded\" style=\"width: 150px;height: 160px;overflow: hidden;\" href=\"#\">\n                   <img class=\"img-responsive\" src=\"img/8447261358.jpg\" alt=\"Instagram\">\n                 </a>\n               </div>\n               <div class=\"card-body\">\n                 <h3 class=\"card-title text-left\">Seller name</h3>\n                 <p class=\"card-text text-left\">\n                   <span class=\"app-users\">\n                    <span class=\"icon icon-map-marker\"></span>\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel harum sequi,\n                     \n                   </span>\n                 </p>\n               </div>\n             </div>\n           </div>\n           <div class=\"col-md-6\">\n                 <div class=\"card\">\n                   <div class=\"card-body\">\n                     <ul class=\"media-list\">\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">Phone number</h4>\n                           <small>987862254</small>\n                         </div>\n                       </li>\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">Country</h4>\n                           <small>India</small>\n                         </div>\n                       </li>\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">City</h4>\n                           <small>Delhi</small>\n                         </div>\n                       </li>\n                       <li class=\"media\">\n                         <div class=\"media-middle media-body\">\n                           <h4 class=\"m-y-0\">Email</h4>\n                           <small>seller@gmail.com</small>\n                         </div>\n                       </li>\n                     </ul>\n                   </div>\n                 </div>\n               </div>\n          </div>\n         </div>\n         <div class=\"modal-footer\"></div>\n       </div>\n     </div>      \n   </div>\n   <div id=\"addUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header bg-primary\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n           <h4 class=\"modal-title\">Add new Subadmin</h4>\n         </div>\n         <div class=\"modal-body provider-detail\">\n          <div class=\"row\">\n           <div class=\"col-xs-12\">\n            <form class=\"form\">\n                   <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label for=\"\" class=\"control-label\">Select Region</label>\n                              <select class=\"form-control\">\n                                  <option>Choose</option>\n                                  <option>Choose</option>\n                                  <option>Choose</option>\n                                  <option>Choose</option>\n                              </select>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"\" class=\"control-label\">Select Region</label>\n                                <select class=\"form-control\">\n                                    <option>Choose</option>\n                                    <option>Choose</option>\n                                    <option>Choose</option>\n                                    <option>Choose</option>\n                                </select>\n                            </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Select User Type</label>\n                                  <div class=\"radio\">\n                                      <label>\n                                        <input type=\"radio\" name=\"message\" value=\"none\"> Admin\n                                      </label>\n                                  </div>\n                                  <div class=\"radio\">\n                                      <label>\n                                        <input type=\"radio\" name=\"message\" value=\"none\"> Subdamin\n                                      </label>\n                                  </div>\n                              </div>\n                          </div> \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">User Name</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>    \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Email</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>    \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Password</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>  \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                  <label for=\"\" class=\"control-label\">Mobile Number</label>\n                                  <input id=\"\" class=\"form-control\" type=\"text\">\n                              </div>\n                          </div>   \n                          <div class=\"col-md-12\">\n                              <div class=\"form-group add-membrs\">\n                                      <h5>Module rights to be given:\n                                      </h5>\n                                      <ul>\n                                        <li>\n                                             Dashboard \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Order Management\n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Account Management \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Payment Management  \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Member Management \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                             Report Generation  \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                             </label>\n                                        </li>\n                                         <li>\n                                               Chat Management \n                                               <label class=\"container_check\">\n                                                  <input type=\"checkbox\">\n                                                  <span class=\"checkmark\"></span>\n                                             </label>\n                                         </li>\n                                          <li>\n                                             Product Management \n                                             <label class=\"container_check\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"checkmark\"></span>\n                                           </label> \n                                         </li>\n                                      </ul>\n                                    </div>\n                          </div>    \n                          <div class=\" col-sm-12 col-md-12\">\n                              <div class=\"form-group padding-top-10\">\n                                  <button class=\"btn btn-primary mr-5\" type=\"\" data-target=\"#unblockUser\" data-toggle=\"modal\">Add and Generate Login</button>\n                                  <button class=\"btn btn-danger\" type=\"submit\">Cancel</button>\n                              </div>\n                          </div>\n                   </div>\n             </form>  \n            </div> \n          </div>\n         </div>\n         <div class=\"modal-footer\"></div>\n       </div>\n     </div>      \n   </div>\n   <div id=\"unblockUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n         </div>\n         <div class=\"modal-body\">\n           <div class=\"text-center\">\n             <span class=\"text-success icon icon-times-circle icon-5x\"></span>\n             <h3 class=\"text-success\">Sure</h3>\n             <h4>Are you want to unblock this item?</h4>\n             <div class=\"m-t-lg\">\n               <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">Continue</button>\n               <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n             </div>\n           </div>\n         </div>\n         <div class=\"modal-footer\"></div>\n       </div>\n     </div>      \n   </div>\n   <div id=\"deleteUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n         </div>\n         <div class=\"modal-body\">\n           <div class=\"text-center\">\n             <span class=\"text-danger icon icon-times-circle icon-5x\"></span>\n             <h3 class=\"text-danger\">Danger</h3>\n             <h4>Are you want to delete this item</h4>\n             <div class=\"m-t-lg\">\n               <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\">Continue</button>\n               <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n             </div>\n           </div>\n         </div>\n         <div class=\"modal-footer\"></div>\n       </div>\n     </div>      \n   </div>\n   <div id=\"blockUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n         <div class=\"modal-content\">\n           <div class=\"modal-header\">\n             <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n               <span aria-hidden=\"true\">×</span>\n               <span class=\"sr-only\">Close</span>\n             </button>\n           </div>\n           <div class=\"modal-body\">\n             <div class=\"text-center\">\n               <span class=\"text-danger text-red-color icon icon-times-circle icon-5x\"></span>\n               <h3 class=\"text-danger text-red-color \">Block</h3>\n               <h4>Are you want to block this item</h4>\n               <div class=\"m-t-lg\">\n                 <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\">Continue</button>\n                 <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n               </div>\n             </div>\n           </div>\n           <div class=\"modal-footer\"></div>\n         </div>\n       </div>      \n     </div>\n"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/reports/reports.component.ts ***!
  \*****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// let CanvasJS:any;
var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
        $('#demo-datepicker-2').datepicker();
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/layout/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/layout/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/layout/settings/settings.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/settings/settings.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/settings/settings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/settings/settings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"settingsPage\"></div>\n\t\t<div class=\"layout-content\">\n\t    <div class=\"layout-content-body\">\n          <div class=\"title-bar\">\n            <h1 class=\"title-bar-title\">\n              <span class=\"d-ib\">Settings</span>\n            </h1>\n          </div>\n        <div class=\"row gutter-xs\">\n            <div class=\"col-md-12\">\n              <div class=\"pcoded-content\">\n                  <div class=\"pcoded-inner-content\">\n                    <div class=\"main-body\">\n                      <div class=\"page-wrapper\">\n                        <div class=\"page-body\">\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#edit-modal\" data-toggle=\"modal\"></button>\n                              About Us</h5>\n                              <div [innerHTML]=\"aboutus\"></div>\n                            </div>\n                          </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\">\n                                <h5>\n                                <button class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#faq-modal\" data-toggle=\"modal\"></button>\n                                FAQs</h5>\n                                <ul class=\"list-group\" style=\"width: 94%;\">\n                                  <li class=\"list-group-item\" *ngFor=\"let ques of faqList | slice:0:3\">\n                                    {{ques.question}}\n                                  </li>\n                                </ul>\n\n                              </div>\n                            </div>\n                          <!--  -->\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#edit-modal-term\" data-toggle=\"modal\"></button>\n                              Tearms & Conditions</h5>\n                              <div [innerHTML]=\"terms\"></div>\n                            </div>\n                          </div>\n                          <!--  -->\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#edit-modal-contact\" data-toggle=\"modal\"></button>\n                              Privacy Policy</h5>\n                              <div [innerHTML]=\"privacy\"></div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        </div>\n<app-footer></app-footer>\n</div>\n\n<!-- add promotion -->\n<div id=\"edit-modal\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-lg\">\n       <div class=\"modal-content\">\n         <!-- <div class=\"modal-header\">\n           <h4></h4>\n           \n         </div> -->\n\n         <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLiveLabel\">About Us</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"position: absolute;right: 20px;top: 15px;\">\n              <span aria-hidden=\"true\">×</span>\n              <span class=\"sr-only\">Close</span>\n            </button>\n         </div>\n\n         <div class=\"modal-body\" style=\"padding-top: 0px;\">\n             <div class=\"form\">\n               <div class=\"text-center\">\n                   <!-- <textarea id=\"form-control-8\" class=\"form-control\" rows=\"4\" placeholder=\"write to About Us\"></textarea> -->\n                   <ck-editor name=\"editor1\" [(ngModel)]=\"aboutus\" placeholder=\"write to About Us\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n                   <!--  <div class=\"col-md-12\">\n                       <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter Tearms & Conditions\" rows=\"4\"></textarea>\n                   </div> -->\n                 <div class=\"m-t-lg\">\n                     <button class=\"btn btn-danger\" type=\"button\" (click)=\"saveSetting()\">Save</button>\n                     <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n                 </div>\n               </div>\n             </div>\n         </div>\n         <!-- <div class=\"modal-footer\"></div> -->\n       </div>\n     </div>      \n   </div>\n<!-- success modal -->\n\n<!-- add promotion -->\n <div id=\"edit-modal-term\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-lg\">\n       <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLiveLabel\">Terms & Conditions</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"position: absolute;right: 20px;top: 15px;\">\n                <span aria-hidden=\"true\">×</span>\n                <span class=\"sr-only\">Close</span>\n              </button>\n          </div>\n         <div class=\"modal-body\" style=\"padding-top: 0px;\">\n             <div class=\"form\">\n               <div class=\"text-center\">\n                   <ck-editor name=\"terms\" [(ngModel)]=\"terms\" placeholder=\"write to Terms & Condition\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n                   <!--  <div class=\"col-md-12\">\n                       <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter Tearms & Conditions\" rows=\"4\"></textarea>\n                   </div> -->\n                 <div class=\"m-t-lg\">\n                     <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveSetting()\">Save</button>\n                     <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n                 </div>\n               </div>\n             </div>\n         </div>\n         <!-- <div class=\"modal-footer\"></div> -->\n       </div>\n     </div>      \n   </div>\n   <!-- add promotion -->\n <div id=\"edit-modal-contact\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-lg\">\n       <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLiveLabel\">Privacy Policy</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"position: absolute;right: 20px;top: 15px;\">\n                <span aria-hidden=\"true\">×</span>\n                <span class=\"sr-only\">Close</span>\n              </button>\n          </div>\n         <div class=\"modal-body\" style=\"padding-top: 0px;\">\n             <div class=\"form\">\n               <div class=\"text-center\">\n                  <ck-editor name=\"privacy\" [(ngModel)]=\"privacy\" placeholder=\"write to Privacy policy\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n                  <!-- <textarea id=\"form-control-8\" class=\"form-control\" rows=\"4\" placeholder=\"write to Privacy policy\"></textarea> -->\n                 <!--  <div class=\"col-md-12\">\n                       <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter Tearms & Conditions\" rows=\"4\"></textarea>\n                   </div> -->\n                 <div class=\"m-t-lg\">\n                     <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"saveSetting()\">Save</button>\n                     <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n                 </div>\n               </div>\n             </div>\n         </div>\n         <!-- <div class=\"modal-footer\"></div> -->\n       </div>\n     </div>      \n   </div>\n\n\n\n   <!-- help & faq -->\n   <div id=\"faq-modal\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n      <div class=\"modal-dialog modal-lg\">\n         <div class=\"modal-content\">\n           <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLiveLabel\">FAQ</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"position: absolute;right: 20px;top: 15px;\">\n                <span aria-hidden=\"true\">×</span>\n                <span class=\"sr-only\">Close</span>\n              </button>\n          </div>\n           <div class=\"modal-body\" style=\"padding-top: 0px;\">\n             <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h4>FAQ List</h4>\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\" *ngFor=\"let ques of faqList\">\n                    {{ques?.question}}\n                    <span class=\"pull-right\">\n                      <span class=\"btn btn-xs btn-default\" (click)=\"selectEditQuestion(ques)\">\n                        <span class=\"icon icon-pencil\" aria-hidden=\"true\"></span>\n                      </span>\n                      <span class=\"btn btn-danger btn-xs btn-default\" (click)=\"selectDeleteQuestion(ques)\" data-target=\"#deletefaq\" data-toggle=\"modal\">\n                        <span class=\"icon icon-trash\" aria-hidden=\"true\"></span>\n                      </span>\n                    </span>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-6\">\n                <h4>Add FAQ</h4>\n                <form [formGroup]=\"faqForm\">\n                  <div>\n                    <input formControlName=\"ques\" [ngClass]=\"{'is-invalid': submitted && f.ques.errors}\" type=\"text\" class=\"form-control\" placeholder=\"Question title\" style=\"margin-bottom: 10px;\"/>\n                    <div  *ngIf=\"submitted && f.ques.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"submitted && f.ques.errors.required\">Question is required</div>\n                    </div>\n                  </div>\n                  <div>\n                    <textarea formControlName=\"ans\" [ngClass]=\"{'is-invalid': submitted && f.ans.errors}\" id=\"form-control-8\" class=\"form-control\" rows=\"4\" placeholder=\"write to Contact Us\"></textarea>\n                    <div  *ngIf=\"submitted && f.ans.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"submitted && f.ans.errors.required\">Answer is required</div>\n                    </div>\n                  </div>\n                  <div style=\"margin-top: 10px;\">\n                      <button class=\"btn btn-danger\" type=\"button\" *ngIf=\"!updateFAQ\" (click)=\"addFaq()\">Save</button>\n                      <button class=\"btn btn-danger\" type=\"button\" *ngIf=\"updateFAQ\" (click)=\"updateFaq()\">Update</button>\n                      <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n                      <button class=\"btn btn-info\" *ngIf=\"updateFAQ\" type=\"button\" (click)=\"resetForm()\">Reset</button>\n                  </div>\n                </form>\n              </div>\n             </div>\n           </div>\n           <!-- <div class=\"modal-footer\"></div> -->\n         </div>\n       </div>      \n     </div>\n<!-- success modal -->\n<div id=\"deletefaq\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n     <div class=\"modal-content\">\n       <div class=\"modal-body\">\n         <div class=\"text-center\">\n           <h4 style=\"color:  #c90101;\">Are you sure you want to delete this question?</h4>\n           <div class=\"m-t-lg\">\n             <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"deleteQues()\">Continue</button>\n             <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>      \n </div>\n \n<div id=\"edit-sccess-modal\" class=\"modal fade\">\n <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n   <div class=\"text-center\">\n     <img src=\"assets/images/auth/logo.png\" alt=\"logo.png\" />\n   </div>\n   <div class=\"modal-body text-center\">\n     <div class=\"row\">\n       <div class=\"col-md-12\">\n         <i class=\"text-success fs-34 d-inline-block icofont icofont-check-circled mb-4\"></i>\n         <h6>Saved Successfully</h6>\n       </div>\n     </div>\n   </div>\n </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/layout/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(api, utils, fb) {
        this.api = api;
        this.utils = utils;
        this.submitted = false;
        this.faqList = [];
        this.updateFAQ = false;
        this.faqForm = fb.group({
            ques: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            ans: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getSettings();
        this.saveSetting();
        this.getFAQs();
    };
    SettingsComponent.prototype.saveSetting = function () {
        var _this = this;
        debugger;
        var dataToSend = {
            about_us: this.aboutus,
            privacy_policy: this.privacy,
            terms: this.terms
        };
        this.api.saveSetting(dataToSend).subscribe(function (data) {
            debugger;
            _this.aboutus = data['response']['about_us'];
            _this.terms = data['response']['terms'];
            _this.privacy = data['response']['privacy_policy'];
            _this.utils.alert('success', 'Get setting successfully');
            $('#edit-modal').modal('hide');
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.api.saveSetting({}).subscribe(function (data) {
            _this.aboutus = (data['about_us']);
            _this.privacy = (data['privacy_policy']);
            _this.terms = (data['terms']);
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    Object.defineProperty(SettingsComponent.prototype, "f", {
        get: function () { return this.faqForm.controls; },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.getFAQs = function () {
        var _this = this;
        this.api.getFAQList().subscribe(function (data) {
            _this.faqList = data['response'];
        }, function (error) {
            console.log(error);
        });
    };
    SettingsComponent.prototype.addFaq = function () {
        var _this = this;
        this.submitted = true;
        if (this.faqForm.invalid)
            return;
        console.log(this.faqForm.value);
        var dataToSend = {
            question: this.faqForm.value.ques,
            answer: this.faqForm.value.ans
        };
        this.api.addQuestion(dataToSend).subscribe(function (data) {
            _this.faqList.push(data['response']);
            _this.faqForm.patchValue({
                ques: '',
                ans: ''
            });
            _this.submitted = false;
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    SettingsComponent.prototype.selectDeleteQuestion = function (item) {
        this.selectedDeleteQues = item;
    };
    SettingsComponent.prototype.deleteQues = function () {
        var _this = this;
        var dataToSend = {
            id: this.selectedDeleteQues._id
        };
        this.api.deleteQuestion(dataToSend).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            var index = _this.faqList.indexOf(_this.selectedDeleteQues);
            _this.faqList.splice(index, 1);
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    SettingsComponent.prototype.selectEditQuestion = function (ques) {
        this.selectedEditQues = ques;
        this.updateFAQ = true;
        this.faqForm.setValue({
            ques: this.selectedEditQues.question,
            ans: this.selectedEditQues.answer
        });
    };
    SettingsComponent.prototype.updateFaq = function () {
        var _this = this;
        var dataToSend = {
            id: this.selectedEditQues._id,
            question: this.faqForm.value.ques,
            answer: this.faqForm.value.ans
        };
        this.api.updateFaq(dataToSend).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            var index = _this.faqList.indexOf(_this.selectedEditQues);
            _this.faqList.splice(index, 1, data['response']);
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    SettingsComponent.prototype.resetForm = function () {
        this.updateFAQ = false;
        this.faqForm.setValue({
            ques: '',
            ans: ''
        });
        this.selectedEditQues = {};
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/layout/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/layout/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"subadminPage\"></div>\n<div class=\"sellerListPage ExplorerListPage\">\n  <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n          <div class=\"title-bar\">\n              <h1 class=\"title-bar-title\">\n                <span class=\"d-ib\">User Management</span>\n              </h1>\n          </div>\n          <div class=\"row gutter-xs\">\n              <div class=\"col-xs-12\">\n                  <div class=\"card\">\n                      <div class=\"card-header\">\n                          <div class=\"card-actions\">\n                              <!-- <button type=\"button\" class=\"card-action card-toggler\" title=\"Collapse\"></button>\n                              <button type=\"button\" class=\"card-action card-reload\" title=\"Reload\"></button> -->\n                              \n                          </div>\n                          <strong>User List</strong>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\" style=\"margin-bottom: 10px;\">\n                          <div class=\"col-md-9\">\n                          <!-- <button (click)=\"exportAsXLSX()\"><i class=\"fa fa-file-excel-o\" style=\"font-size:48px;color:blue\"></i></button> -->\n                          </div>\n                          <div class=\"col-md-3\">\n                            <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" type=\"search\" placeholder=\"search...\" />\n                            <!-- <div class=\"xsl\">\n                              <button class=\"btn btn-info btn-sm btn-labeled f-16\" type=\"button\" data-toggle=\"modal\" data-target=\"#addUser\" (click)=\"addNewEmployee()\">\n                                Add Employee\n                              </button>\n                            </div> -->\n                          </div>\n                        </div>\n\n                          <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"position\">\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> S. No. </th>\n                              <td mat-cell *matCellDef=\"let element; let i = index\"> {{i+1}} </td>\n                            </ng-container>\n                          \n                            <ng-container matColumnDef=\"empid\">\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Email ID </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.email_id}}</td>\n                            </ng-container>\n                            \n                            <!-- Name Column -->\n                            <ng-container matColumnDef=\"name\">\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.first_name}} {{element.last_name}}</td>\n                            </ng-container>\n                          \n                           \n\n                            <ng-container matColumnDef=\"mobile\">\n                              <th mat-header-cell *matHeaderCellDef> Mobile No. </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.country_code}}{{element.mobile_number}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"status\">\n                              <th mat-header-cell *matHeaderCellDef> Status </th>\n                              <td mat-cell *matCellDef=\"let element\"><span [ngClass]=\"{'text-danger': element.is_blocked, 'text-success': !element.is_blocked}\"> {{element.is_blocked ? \"Blocked\" : \"Unblocked\"}} </span></td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"created_on\">\n                              <th mat-header-cell *matHeaderCellDef> Created At </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{(element.created_on)*1000 | date}} </td>\n                            </ng-container>\n                            \n\n                            <ng-container matColumnDef=\"action\">\n                              <th mat-header-cell *matHeaderCellDef> Action </th>\n                              <td mat-cell *matCellDef=\"let element\">\n                                <!-- <button class=\"btn btn-success btn-sm btn-labeled\" type=\"button\" data-toggle=\"modal\" data-target=\"#addUser\" (click)=\"selectEditUser(element)\">\n                                    <span class=\"btn-label\">\n                                    <i class=\"fa fa-edit icon-lg icon-fw\" aria-hidden=\"true\"></i>\n                                    </span>\n                                    Edit\n                                </button> -->\n                                <button class=\"btn btn-sm btn-labeled\" [ngClass]=\"{'btn-info': element.is_block, 'btn-warning': !element.is_block}\" type=\"button\" data-toggle=\"modal\" data-target=\"#blockUser\" (click)=\"selectBlockUser(element)\">\n                                    <span class=\"btn-label\">\n                                        <i class=\"fa fa-ban f-16\" aria-hidden=\"true\"></i>\n                                    </span>\n                                    {{element.is_blocked ? 'Unblock' : 'Block'}}\n                                </button>\n                                <button class=\"btn btn-danger btn-sm btn-labeled\" type=\"button\" data-toggle=\"modal\" data-target=\"#deleteUser\" (click)=\"selectDeleteUser(element)\">\n                                    <span class=\"btn-label\">\n                                        <i  class=\"fa fa-trash icon-lg icon-fw\"></i>\n                                    </span>\n                                    Delete\n                                </button>\n                                <!-- <label class=\"switch\">\n                                    <input type=\"checkbox\" checked>\n                                    <span class=\"slider round\"></span>\n                                </label> -->\n                              </td>\n                            </ng-container>\n                          \n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                          </table>\n                          <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>\n<app-footer></app-footer>\n<!-----  Modal Block   ---->\n<div id=\"blockUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm\">\n       <div class=\"modal-content\">\n         <div class=\"modal-body\">\n           <div class=\"text-center\">\n             <h4 style=\"color:  #c90101;\">Are you sure you want to {{selectedBlockUser?.is_block ? 'unblock' : 'block'}} this user?</h4>\n             <div class=\"m-t-lg\">\n               <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"blockUser()\">Yes</button>\n               <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>      \n   </div>\n    <!-----  Modal Block   ---->\n             <!-- Modal Block Confirm-->\n<div class=\"modal fade\" id=\"deleted-me\">\n <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n   <div class=\"modal-content\">      \n     <div class=\"modal-body\" style=\"text-align: center;\">\n       <h4 style=\"color:  #c90101;\">Blocked Successfully !</h4>\n       <div class=\"successful-icon\" style=\"color:  #c90101;\">\n       <i class=\"fa fa-check-square\"></i>\n     </div>\n     </div>\n     \n   </div>\n </div>\n</div>\n<!-- Modal Block Confirm-->\n\n    <!-----  Modal DELETE   ---->\n    <div id=\"deleteUser\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n        <div class=\"modal-dialog modal-sm\">\n           <div class=\"modal-content\">\n             <div class=\"modal-body\">\n               <div class=\"text-center\">\n                 <h4 style=\"color:  #c90101;\">Are you sure you want to delete this user?</h4>\n                 <div class=\"m-t-lg\">\n                   <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" (click)=\"deleteUser()\">Yes</button>\n                   <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n                 </div>\n               </div>\n             </div>\n           </div>\n         </div>      \n       </div>\n\n       \n   <div class=\"modal fade\" id=\"deleted-me\">\n     <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n       <div class=\"modal-content\">      \n         <div class=\"modal-body\" style=\"text-align: center;\">\n           <h4 style=\"color:  #c90101;\">Deleted Successfully !</h4>\n           <div class=\"successful-icon\" style=\"color:  #c90101;\">\n           <i class=\"fa fa-check-square\"></i>\n         </div>\n         </div>\n         \n       </div>\n     </div>\n   </div>\n \n   \n   "

/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(api, fb, utils, router, excelService) {
        this.api = api;
        this.utils = utils;
        this.router = router;
        this.excelService = excelService;
        this.displayedColumns = ['position', 'empid', 'name', 'status', 'mobile', 'created_on', 'action'];
        this.Userlist = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.Userlist);
        this.updateUser = false;
        this.submitted = false;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"];
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
        $(".profile-img").change(function (e) {
            var img = e.target.files[0];
            if (!iEdit.open(img, true, function (res) {
                $(".result").attr("src", res);
            })) {
                alert("Whoops! That is not an image!");
            }
        });
    };
    UserManagementComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this.api.getUserList().subscribe(function (data) {
            _this.Userlist = data['response'];
            console.log(data);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.Userlist);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, 500);
        }, function (error) {
            console.log(error);
            _this.utils.alert('error', error['error']['message']);
            if (error['status'] == 400) {
                _this.router.navigate(['/login']);
                _this.utils.removeData('appcrowd_admin_data');
            }
            debugger;
        });
    };
    UserManagementComponent.prototype.selectDeleteUser = function (user) {
        debugger;
        this.selectedDeleteUser = user;
    };
    UserManagementComponent.prototype.deleteUser = function () {
        var _this = this;
        var dataToSend = {
            id: this.selectedDeleteUser._id
        };
        this.api.deleteUser(dataToSend).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            _this.getEmployeeList();
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    UserManagementComponent.prototype.selectBlockUser = function (user) {
        this.selectedBlockUser = user;
    };
    UserManagementComponent.prototype.blockUser = function () {
        var _this = this;
        debugger;
        var dataToSend = {
            id: this.selectedBlockUser._id,
            is_blocked: !this.selectedBlockUser.is_blocked
        };
        this.api.blockUser(dataToSend).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            _this.getEmployeeList();
        }, function (error) {
            console.log(error);
            debugger;
        });
    };
    UserManagementComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserManagementComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.Userlist, 'sample');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UserManagementComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UserManagementComponent.prototype, "sort", void 0);
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/layout/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/layout/user-management/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{display:table-cell;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9Il19 */"

/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo-blk.png\" alt=\"logo\">\n      </a>\n      <div class=\"login-form\">\n        <form (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"email\">Enter Email</label>\n            <input id=\"email\" [(ngModel)]=\"forgotPassword.email\" #email=\"ngModel\" \n            [ngClass]=\"{'is-invalid': f.submitted && email.invalid}\" class=\"form-control\" type=\"email\" name=\"email\" required>\n            <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"email.errors.required\">Email id is required</div>\n          </div>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\">Send Otp</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(api, utils, router) {
        this.api = api;
        this.utils = utils;
        this.router = router;
        this.forgotPassword = {};
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.forgotPassword({ email: this.forgotPassword.email }).subscribe(function (data) {
            if (data['status'] == -1) {
                _this.utils.alert('warn', data['message']);
                _this.utils.set('appcrowd_admin_data', data['response']);
                _this.router.navigate(['/VerifyOtp']);
                return;
            }
            _this.utils.alert('success', data['message']);
            _this.utils.set('appcrowd_admin_data', data['response']);
            _this.router.navigate(['/VerifyOtp']);
        }, function (error) {
            console.log(error);
            _this.utils.alert('error', error['error']['message']);
            debugger;
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/shared/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/shared/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{display:table-cell !important;vertical-align:middle !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyw2QkFBNkIsQ0FBQyxnQ0FBZ0MsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtkaXNwbGF5OnRhYmxlLWNlbGwgIWltcG9ydGFudDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDt9Il19 */"

/***/ }),

/***/ "./src/app/shared/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <span style=\"text-aligin:center;font-size: 20px;font-family: unset;font-weight: bold;\">App Crowd</span>\n        <!-- <img class=\"img-responsive\" src=\"assets/img/logo-blk.png\" alt=\"logo\"> -->\n      </a>\n      <div class=\"login-form\">\n        <form [formGroup]=\"loginForm\" data-toggle=\"validator\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input id=\"email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\" class=\"form-control\" type=\"email\" name=\"email\" spellcheck=\"false\" autocomplete=\"off\" data-msg-required=\"Please enter your email address.\" required>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"submitted && f.email.errors.email\">Enter a valid email id</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input id=\"password\" formControlName=\"password\" [ngClass]=\"{'is-invalid': submitted && f.password.errors}\" class=\"form-control\" type=\"password\" name=\"password\">\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && f.password.errors.required\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"custom-control custom-control-primary custom-checkbox\">\n              <input class=\"custom-control-input\" type=\"checkbox\" id=\"remember_me\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-label\">Remember Me</span>\n            </label>\n            <!-- <span aria-hidden=\"true\"> ยท </span> -->\n            <a routerLink=\"/forgot-password\" class=\"pull-right\">Forgot password?</a>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\" (click)=\"login()\">Sign in</button>\n        </form>\n      </div>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, utils, api, router) {
        this.utils = utils;
        this.api = api;
        this.router = router;
        this.submitted = false;
        var adminCredentials = this.utils.get('appcrowd_admin_data');
        this.loginForm = fb.group({
            email: [adminCredentials ? adminCredentials.email : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [adminCredentials ? adminCredentials.password : "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid)
            return;
        var remember_me = $('#remember_me').is(":checked");
        if (remember_me) {
            this.utils.set('appcrowd_admin_data', this.loginForm.value);
        }
        else {
            this.utils.removeData('appcrowd_admin_data');
        }
        this.api.login(this.loginForm.value).subscribe(function (data) {
            console.log(data);
            _this.utils.set('appcrowd_admin_data', data['response']);
            _this.utils.alert('success', 'Admin logged in successfully');
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            debugger;
            _this.utils.alert('error', error['error']['message']);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/shared/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{display:table-cell;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlO30iXX0= */"

/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo-blk.png\" alt=\"logo\">\n      </a>\n      <div class=\"login-form\">\n        <form [formGroup]=\"resetPassword\">\n          <div class=\"form-group\">\n            <label for=\"password\">New Password</label>\n            <input id=\"password\" formControlName=\"new_password\" class=\"form-control\" type=\"password\" name=\"password\" [ngClass]=\"{'is-invalid': submitted && f.new_password.errors}\">\n            <div *ngIf=\"submitted && f.new_password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && f.new_password.errors.required\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirm_password\">Confirm Password</label>\n            <input id=\"confirm_password\" formControlName=\"confirm_password\" class=\"form-control\" type=\"password\" name=\"confirm_password\" [ngClass]=\"{'is-invalid': submitted && f.confirm_password.errors}\">\n            <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && f.confirm_password.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"submitted && f.confirm_password.errors.mustMatch\">Password not matched</div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\" (click)=\"submit()\">Sign in</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ "./src/app/shared/services/http.service.ts");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, activeRoute, utils, router, api) {
        this.activeRoute = activeRoute;
        this.utils = utils;
        this.router = router;
        this.api = api;
        this.submitted = false;
        this.resetPassword = fb.group({
            new_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: this.MustRePassMatch('new_password', 'confirm_password')
        });
        this.admin_email = this.utils.get('admin_email');
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.adminData = this.utils.get('appcrowd_admin_data');
        console.log(this.adminData);
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        get: function () { return this.resetPassword.controls; },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.submit = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        if (this.resetPassword.invalid)
            return;
        var dataToSend = {
            _id: this.adminData._id,
            password: this.resetPassword.value.new_password
        };
        this.api.resetPassword(dataToSend).subscribe(function (data) {
            _this.utils.alert('success', data['message']);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.utils.alert('error', error['error']['message']);
            debugger;
        });
    };
    ResetPasswordComponent.prototype.MustRePassMatch = function (controlRePassName, matchingRePassControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlRePassName];
            var matchingRePassControl = formGroup.controls[matchingRePassControlName];
            if (matchingRePassControl.errors && !matchingRePassControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingRePassControl.value) {
                matchingRePassControl.setErrors({ mustMatch: true });
            }
            else {
                matchingRePassControl.setErrors(null);
            }
        };
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/shared/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/shared/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth.guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/auth.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var adminData = localStorage.getItem('appcrowd_admin_data');
        var token;
        if (adminData) {
            token = JSON.parse(localStorage.getItem('appcrowd_admin_data')).access_token;
        }
        else {
            token = '';
        }
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
        url += req.url;
        // console.log(url);
        var copiedReq = req.clone({
            headers: req.headers.append('access_token', token), url: url
        });
        return next.handle(copiedReq);
    };
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.isLoggedIn = function () {
        var token = window.localStorage.getItem('appcrowd_admin_data');
        if (token)
            return true;
        else
            return false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.login = function (data) {
        return this.http.post('admin/login', data);
    };
    HttpService.prototype.forgotPassword = function (data) {
        return this.http.post('admin/forgotPassword', data);
    };
    HttpService.prototype.verifyotp = function (data) {
        return this.http.post('admin/verifyotp', data);
    };
    HttpService.prototype.logout = function (data) {
        return this.http.post('admin/logout', data);
    };
    HttpService.prototype.resetPassword = function (data) {
        return this.http.post('admin/reset_password', data);
    };
    HttpService.prototype.updateProfile = function (data) {
        return this.http.post('admin/updateProfile', data);
    };
    HttpService.prototype.changePassword = function (data) {
        return this.http.post('admin/change_password', data);
    };
    // user management
    HttpService.prototype.getUserList = function () {
        return this.http.get('admin/usersList');
    };
    HttpService.prototype.createNewUser = function (data) {
        return this.http.post('admin/createUser', data);
    };
    HttpService.prototype.deleteUser = function (data) {
        return this.http.post('admin/deleteUser', data);
    };
    HttpService.prototype.blockUser = function (data) {
        return this.http.post('admin/blockUser', data);
    };
    HttpService.prototype.updateUser = function (data) {
        return this.http.post('admin/updateUser', data);
    };
    HttpService.prototype.saveSetting = function (data) {
        return this.http.post('admin/saveSettings', data);
    };
    // faq management
    HttpService.prototype.getFAQList = function () {
        return this.http.get('admin/faqList');
    };
    HttpService.prototype.addQuestion = function (data) {
        return this.http.post('admin/addFaqQuestion', data);
    };
    HttpService.prototype.deleteQuestion = function (data) {
        return this.http.post('admin/deleteFaqQuestion', data);
    };
    HttpService.prototype.updateFaq = function (data) {
        return this.http.post('admin/updateFaqQuestion', data);
    };
    HttpService.prototype.getcontent = function () {
        return this.http.get('admin/getcontent');
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/shared/services/utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UtilsService = /** @class */ (function () {
    function UtilsService(toast) {
        this.toast = toast;
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('default');
        this.profileStatus = this.profile.asObservable();
    }
    /*storage*/
    UtilsService.prototype.set = function (key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    };
    UtilsService.prototype.get = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    };
    UtilsService.prototype.update = function (key, dataKey, data) {
        var BData = this.get(key);
        this.removeData(key);
        BData[dataKey] = data;
        window.localStorage.setItem(key, JSON.stringify(BData));
    };
    UtilsService.prototype.removeData = function (key) {
        window.localStorage.removeItem(key);
    };
    UtilsService.prototype.clear = function () {
        window.localStorage.clear();
    };
    /*toaster*/
    UtilsService.prototype.alert = function (type, msg) {
        switch (type) {
            case "success":
                this.toast.success(msg, 'SUCCESS');
                break;
            case "info":
                this.toast.info(msg, 'INFORMATION');
                break;
            case "error":
                this.toast.error(msg, 'ERROR');
                break;
            case "warn":
                this.toast.warning(msg, 'WARNING');
                break;
            default:
                this.toast.success(msg, 'SUCCESS');
                break;
        }
    };
    /*location service*/
    // setLocation(callback){
    //   navigator.geolocation.getCurrentPosition((data)=> {
    //     this.getAddressFromMarker(data['coords']['latitude'], data['coords']['longitude'], callback);
    //   });
    // }
    // getAddressFromMarker(lat, lng, callback){
    //   var that = this;
    //   var loc_str = that.get('bringness_data').location.address_string;
    //   if(loc_str != "") callback();
    //   var geocoder = new google.maps.Geocoder();
    //   geocoder.geocode
    //     ({
    //         latLng: {lat: lat, lng: lng}
    //     }, 
    //     function(results, status) 
    //     {
    //       that.update('bringness_data', 'location', {
    //         address_string: results.length != 0 ? results[2].formatted_address : '',
    //         lat: lat,
    //         long: lng
    //       });
    //       callback();
    //     }
    //   );
    // }
    UtilsService.prototype.scrollToTop = function () {
        window.scrollTo(0, 0);
    };
    UtilsService.prototype.profileChanged = function (msg) {
        this.profile.next(msg);
    };
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/shared/verify-otp/verify-otp.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/verify-otp/verify-otp.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92ZXJpZnktb3RwL3ZlcmlmeS1vdHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/verify-otp/verify-otp.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/verify-otp/verify-otp.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo-blk.png\" alt=\"logo\">\n      </a>\n      <div class=\"login-form\">\n        <form (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"verification_code\">Enter Otp</label>\n            <input id=\"verification_code\" [(ngModel)]=\"forgotPassword.verification_code\" #verification_code=\"ngModel\" [ngClass]=\"{'is-invalid': f.submitted && verification_code.invalid}\"\n              class=\"form-control\" type=\"number\" name=\"verification_code\" required>\n            <div *ngIf=\"f.submitted && verification_code.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"verification_code.errors.required\">Verification code is required</div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/verify-otp/verify-otp.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/verify-otp/verify-otp.component.ts ***!
  \***********************************************************/
/*! exports provided: VerifyOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpComponent", function() { return VerifyOtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VerifyOtpComponent = /** @class */ (function () {
    function VerifyOtpComponent(api, utils, router) {
        this.api = api;
        this.utils = utils;
        this.router = router;
        this.forgotPassword = {};
    }
    VerifyOtpComponent.prototype.ngOnInit = function () {
        this.adminData = this.utils.get('appcrowd_admin_data');
        console.log(this.adminData);
    };
    VerifyOtpComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.api.verifyotp({ verification_code: this.forgotPassword.verification_code, _id: this.adminData._id }).subscribe(function (data) {
            if (data['status'] == -1) {
                _this.utils.alert('warn', data['message']);
                _this.utils.set('appcrowd_admin_data', data['response']);
                _this.router.navigate(['/reset-password']);
            }
            _this.utils.alert('success', data['message']);
            _this.router.navigate(['/reset-password']);
        }, function (error) {
            console.log(error);
            _this.utils.alert('error', error['error']['message']);
            debugger;
        });
    };
    VerifyOtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-otp',
            template: __webpack_require__(/*! ./verify-otp.component.html */ "./src/app/shared/verify-otp/verify-otp.component.html"),
            styles: [__webpack_require__(/*! ./verify-otp.component.css */ "./src/app/shared/verify-otp/verify-otp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], VerifyOtpComponent);
    return VerifyOtpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/'
    //baseUrl:'http://13.235.233.112:3000/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fluper/Documents/1.office project/Appcrowd_admin/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map