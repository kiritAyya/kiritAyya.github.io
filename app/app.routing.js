"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./dashboard/login.component');
// export class AppComponent { }
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map