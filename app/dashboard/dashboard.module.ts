import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {OverviewComponent} from './overview.component'
import {dashboardRouting} from './dashboard.routing'

@NgModule({
	imports: [CommonModule, dashboardRouting],
	declarations: [OverviewComponent]
})

export class DashboardModule{
	
}