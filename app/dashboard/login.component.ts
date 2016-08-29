import { Component, ElementRef } from '@angular/core'
import { AuthenticationService, User} from './authentication.service'

@Component({
	selector: 'login-form',
	providers: [AuthenticationService],
	templateUrl: 'app/dashboard/login.component.html'
})

export class LoginComponent {
	public user = new User('', '');
	public errorMsg = '';
	constructor(
		private _service:AuthenticationService, private elementRef: ElementRef){}

	login(){
		if(!this._service.login(this.user)){
			this.errorMsg = "Failed to Login";
		}
	}
    ngAfterViewInit(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = 'app/dashboard/login.script.js'
        this.elementRef.nativeElement.appendChild(s);
    }
}