import {Component, ElementRef} from '@angular/core'
import {FixtureService} from './fixture.service'

@Component({
	moduleId: module.id,
	selector: 'fixture',
	templateUrl: 'fixture.component.html',
	providers: [FixtureService]
})

export class FixtureComponent{
	constructor(private _elementRef: ElementRef ,private fixtureService: FixtureService){
	}

	state = true;

	ngAfterViewInit(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'app/dashboard/fixture.script.js'
		this._elementRef.nativeElement.appendChild(s)
	}

	turnAllFixturesOff(){
		this.fixtureService.turnOffAllFixtures();
		console.log("Fixtures Go OFF");
	}

	turnAllFixturesOn(){
		this.fixtureService.turnOnAllFixtures();
		console.log("Fixtures Go ON")
	}

	powerFixture(){
		if(this.state){
			this.turnAllFixturesOff();
			this.state = false
		} else {
			this.turnAllFixturesOn();
			this.state = true;
		}
	}

};