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
var FooterComponent = (function () {
    function FooterComponent(navigationService) {
        this.navigationService = navigationService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        //get pages
        this.getPages();
        //get year
        this.year = new Date().getFullYear().toString();
    };
    FooterComponent.prototype.getPages = function () {
        var _this = this;
        this.navigationService.getPages().then(function (pages) { return _this.pages = pages; });
    };
    FooterComponent.prototype.onSelect = function (page) {
        this.selectedPage = page;
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'my-footer',
            moduleId: module.id,
            templateUrl: '../views/footer.component.html'
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map