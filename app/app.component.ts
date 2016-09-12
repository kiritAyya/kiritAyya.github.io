import { Component } from '@angular/core';
import { Auth } from './auth.service';

import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [Auth],
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
	constructor(private auth:Auth){}
}
