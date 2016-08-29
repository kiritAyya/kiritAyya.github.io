import {Component, ElementRef} from '@angular/core'
import {SummaryComponent} from './summary.component'
import {GraphsComponent} from '../graphs/graphs.component'
import {TasksComponent} from './tasks.component'
import {MessagingComponent} from "./messaging.component"

@Component({
	selector: 'overview',
	directives: [SummaryComponent, GraphsComponent, TasksComponent, MessagingComponent],
	templateUrl: 'app/dashboard/overview.component.html'
})


export class OverviewComponent{
	constructor(private elementRef: ElementRef){}
	ngAfterViewInit(){
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = 'app/dashboard/overview.script.js'
		this.elementRef.nativeElement.appendChild(s);
	}
}