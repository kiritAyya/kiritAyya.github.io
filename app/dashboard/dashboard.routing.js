"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var overview_component_1 = require('./overview.component');
var allFixtures_component_1 = require('./allFixtures.component');
var downFixtures_component_1 = require('./downFixtures.component');
var dimming_component_1 = require('./dimming.component');
var fixture_component_1 = require('./fixture.component');
var fixtureControl_component_1 = require('./fixtureControl.component');
var dashboardRoutes = [
    {
        path: 'home',
        component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', component: overview_component_1.OverviewComponent },
            { path: 'allfixtures', component: allFixtures_component_1.AllFixturesComponent },
            { path: 'downfixtures', component: downFixtures_component_1.DownFixturesComponent },
            {
                path: 'fixturecontrol',
                component: fixtureControl_component_1.FixtureControlComponent,
                children: [
                    { path: '', component: dimming_component_1.DimmingComponent },
                    { path: 'fixture', component: fixture_component_1.FixtureComponent },
                ]
            },
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map