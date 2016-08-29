import {Component, ElementRef} from '@angular/core'
import {AuthenticationService} from './authentication.service'

@Component({
	selector: 'dashboard',
	providers: [AuthenticationService],
	templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent{
	constructor(
		private _service:AuthenticationService,
		private _elementRef: ElementRef
		){}

	ngOnInit(){
		this._service.checkCredentials();

	}

	ngAfterViewInit(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'assets/common/js/common.js';
		this._elementRef.nativeElement.appendChild(s)
	}

	logout(){
		this._service.logout();
	}


}