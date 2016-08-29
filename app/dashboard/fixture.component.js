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
var fixture_service_1 = require('./fixture.service');
var FixtureComponent = (function () {
    function FixtureComponent(_elementRef, fixtureService) {
        this._elementRef = _elementRef;
        this.fixtureService = fixtureService;
        this.state = true;
    }
    FixtureComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'app/dashboard/fixture.script.js';
        this._elementRef.nativeElement.appendChild(s);
    };
    FixtureComponent.prototype.turnAllFixturesOff = function () {
        this.fixtureService.turnOffAllFixtures();
        console.log("Fixtures Go OFF");
    };
    FixtureComponent.prototype.turnAllFixturesOn = function () {
        this.fixtureService.turnOnAllFixtures();
        console.log("Fixtures Go ON");
    };
    FixtureComponent.prototype.powerFixture = function () {
        if (this.state) {
            this.turnAllFixturesOff();
            this.state = false;
        }
        else {
            this.turnAllFixturesOn();
            this.state = true;
        }
    };
    FixtureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fixture',
            templateUrl: 'fixture.component.html',
            providers: [fixture_service_1.FixtureService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, fixture_service_1.FixtureService])
    ], FixtureComponent);
    return FixtureComponent;
}());
exports.FixtureComponent = FixtureComponent;
;
//# sourceMappingURL=fixture.component.js.map