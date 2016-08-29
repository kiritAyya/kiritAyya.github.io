import { Component } from '@angular/core';
import { LoginComponent } from './dashboard/login.component';

@Component({
  selector: 'my-app',
  directives:[LoginComponent],
  template: `
  	<router-outlet></router-outlet>
  `
})
export class AppComponent {}
