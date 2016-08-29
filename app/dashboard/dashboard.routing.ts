import { Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core';
import {DashboardComponent} from './dashboard.component'
import {OverviewComponent} from './overview.component'
import {AllFixturesComponent} from './allFixtures.component'
import {DownFixturesComponent} from './downFixtures.component'
import {DimmingComponent} from './dimming.component'
import {FixtureComponent} from './fixture.component'
import {FixtureControlComponent} from './fixtureControl.component'


const dashboardRoutes: Routes=[

	{
		path: 'home', 
		component: DashboardComponent,
		children: [
			{path: '', component: OverviewComponent},
			{path: 'allfixtures', component: AllFixturesComponent},
			{path: 'downfixtures', component: DownFixturesComponent},
			{
				path: 'fixturecontrol', 
				component: FixtureControlComponent,
				children: [
					{path: '', component: DimmingComponent},
					{path: 'fixture', component: FixtureComponent},
				]
			},
		]
	}
]

export const dashboardRouting = RouterModule.forChild(dashboardRoutes)