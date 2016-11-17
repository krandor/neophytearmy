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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var navigation_service_1 = require('../services/navigation.service');
var page_1 = require('../objects/page');
require('rxjs/add/operator/switchMap');
var PageDetailComponent = (function () {
    function PageDetailComponent(navigationService, route, location) {
        this.navigationService = navigationService;
        this.route = route;
        this.location = location;
    }
    PageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.navigationService.getPage(+params['id']); })
            .subscribe(function (page) { return _this.page = page; });
    };
    PageDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', page_1.Page)
    ], PageDetailComponent.prototype, "page", void 0);
    PageDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-page-detail',
            moduleId: module.id,
            templateUrl: '../views/page-detail.component.html'
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService, router_1.ActivatedRoute, common_1.Location])
    ], PageDetailComponent);
    return PageDetailComponent;
}());
exports.PageDetailComponent = PageDetailComponent;
//# sourceMappingURL=page-detail.component.js.map