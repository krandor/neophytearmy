"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navigation_service_1 = require('./navigation.service');
var NavBarComponent = (function () {
    function NavBarComponent(navigationService) {
        this.navigationService = navigationService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    NavBarComponent.prototype.getPages = function () {
        var _this = this;
        this.navigationService.getPages().then(function (pages) { return _this.pages = pages; });
    };
    NavBarComponent.prototype.onSelect = function (page) {
        this.selectedPage = page;
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'my-nav-bar',
            template: "\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">NeophyteArmy</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li *ngFor=\"let page of pages\"\n                (click)=\"onSelect(page)\"\n                [class.selected]=\"page === selectedPage\">\n                <!-- each page goes here -->\n                <a [routerLink]=\"['/page', page.id]\">{{page.name}}</a>\n              </li>\n            </ul>\n        </div>\n      </div>\n      <!-- /.container -->\n    </nav>\n    <!-- Page Content -->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n              <router-outlet></router-outlet>\n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map