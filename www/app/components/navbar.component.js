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
var navigation_service_1 = require('../services/navigation.service');
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
            moduleId: module.id,
            templateUrl: '../views/navbar.component.html'
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map