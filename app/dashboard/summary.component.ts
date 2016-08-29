import {Component, OnInit} from '@angular/core'
import {Counto} from 'angular2-counto/src/counto.directive'
import {SummaryService} from './summary.service'

@Component({
	selector:'summary',
	templateUrl: 'app/dashboard/summary.component.html',
	directives: [Counto],
	providers: [SummaryService],
})

export class SummaryComponent implements OnInit {
	public energy: any; 
	public weather: any; 
	public fixtures_working: any; 
	public fixtures_down: any;
	weatherFromApi: string;
	weatherDegrees: number;
	locationName: string;

	constructor(private _weather: SummaryService ){}

	ngOnInit(){
		this._weather.getWeather()
				.subscribe(
					data => this.weatherFromApi = data,
					error => console.log(error),
					() => console.log("done")
				);
		this._weather.getDegrees()
				.subscribe(
					data => this.weatherDegrees = Math.floor(data),
					error => console.log(error),
					() => console.log(Math.floor(this.weatherDegrees))
				);

		this._weather.getLocationName()
				.subscribe(
						data => this.locationName = data,
						error => console.log(error),
						() => console.log(this.locationName)
					);
	}
}