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
var counto_directive_1 = require('angular2-counto/src/counto.directive');
var summary_service_1 = require('./summary.service');
var SummaryComponent = (function () {
    function SummaryComponent(_weather) {
        this._weather = _weather;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weather.getWeather()
            .subscribe(function (data) { return _this.weatherFromApi = data; }, function (error) { return console.log(error); }, function () { return console.log("done"); });
        this._weather.getDegrees()
            .subscribe(function (data) { return _this.weatherDegrees = Math.floor(data); }, function (error) { return console.log(error); }, function () { return console.log(Math.floor(_this.weatherDegrees)); });
        this._weather.getLocationName()
            .subscribe(function (data) { return _this.locationName = data; }, function (error) { return console.log(error); }, function () { return console.log(_this.locationName); });
    };
    SummaryComponent = __decorate([
        core_1.Component({
            selector: 'summary',
            templateUrl: 'app/dashboard/summary.component.html',
            directives: [counto_directive_1.Counto],
            providers: [summary_service_1.SummaryService],
        }), 
        __metadata('design:paramtypes', [summary_service_1.SummaryService])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=summary.component.js.map