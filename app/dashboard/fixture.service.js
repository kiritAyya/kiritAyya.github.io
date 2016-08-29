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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
var FixtureService = (function () {
    function FixtureService(http) {
        this.http = http;
        this._baseUrl = "http://36.255.234.121/";
        this.on = "on";
        this.off = 'off';
        this.intensity = 'intensity/';
    }
    FixtureService.prototype.turnOnAllFixtures = function () {
        console.log(this._baseUrl + this.on);
        this.http.get(this._baseUrl + this.on).catch(this.handleError).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('hey'); });
    };
    FixtureService.prototype.turnOffAllFixtures = function () {
        this.http.get(this._baseUrl + this.off).catch(this.handleError);
    };
    FixtureService.prototype.turnOffFixture = function (id) {
        this.http.get(this._baseUrl + this.off + '/' + id).catch(this.handleError);
    };
    FixtureService.prototype.turnOnFixture = function (id) {
        this.http.get(this._baseUrl + this.on + '/' + id).catch(this.handleError);
    };
    FixtureService.prototype.turnIntensityAll = function (value) {
        this.http.get(this._baseUrl + this.intensity + value).catch(this.handleError);
    };
    FixtureService.prototype.turnIntensityFixture = function (id, value) {
        this.http.get(this._baseUrl + this.intensity + value + '/' + id).catch(this.handleError);
    };
    FixtureService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    FixtureService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FixtureService);
    return FixtureService;
}());
exports.FixtureService = FixtureService;
//# sourceMappingURL=fixture.service.js.map