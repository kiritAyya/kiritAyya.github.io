import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'

@Injectable()
export class FixtureService{
	constructor(private http: Http){}

	private _baseUrl = "http://36.255.234.121/";
	private on = "on";
	private off = 'off';
	private intensity = 'intensity/';

	turnOnAllFixtures(){
		console.log(this._baseUrl+this.on);
		this.http.get(this._baseUrl+this.on).catch(this.handleError).subscribe(
			data => console.log(data),
			err => console.log(err),
			() => console.log('hey'));
	}

	turnOffAllFixtures(){
		this.http.get(this._baseUrl+this.off).catch(this.handleError);
	}

	turnOffFixture(id: number){
		this.http.get(this._baseUrl+this.off+'/'+id).catch(this.handleError);
	}

	turnOnFixture(id: number){
		this.http.get(this._baseUrl+this.on+'/'+id).catch(this.handleError);	
	}

	turnIntensityAll(value: number){
		this.http.get(this._baseUrl+this.intensity+value).catch(this.handleError);		
	}

	turnIntensityFixture(id: number, value: number){
		this.http.get(this._baseUrl+this.intensity+value+'/'+id).catch(this.handleError);	
	}



	private handleError(error: any){
		let errMsg = (error.message) ? error.message :
      	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
	}
}