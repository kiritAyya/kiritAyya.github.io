import { Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './dashboard/login.component';


// export class AppComponent { }
const appRoutes: Routes= [
		{ path: 'login', component: LoginComponent },
		{ path: '', redirectTo: '/login', pathMatch: 'full' }	
	];

export const routing = RouterModule.forRoot(appRoutes)