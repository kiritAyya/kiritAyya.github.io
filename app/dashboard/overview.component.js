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
var summary_component_1 = require('./summary.component');
var graphs_component_1 = require('../graphs/graphs.component');
var tasks_component_1 = require('./tasks.component');
var messaging_component_1 = require("./messaging.component");
var OverviewComponent = (function () {
    function OverviewComponent(elementRef) {
        this.elementRef = elementRef;
    }
    OverviewComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = 'app/dashboard/overview.script.js';
        this.elementRef.nativeElement.appendChild(s);
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: 'overview',
            directives: [summary_component_1.SummaryComponent, graphs_component_1.GraphsComponent, tasks_component_1.TasksComponent, messaging_component_1.MessagingComponent],
            templateUrl: 'app/dashboard/overview.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map