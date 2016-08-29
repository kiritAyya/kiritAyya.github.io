import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';


@Injectable()
export class SummaryService{
	private _apiUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=bambolim&appid=c458eebc6354d774534e6bd17c76599c&units=metric'
	constructor(private http:Http){}
	
	getWeather(){
		return this.http.get(this._apiUrl)
			.map(this.extractWeatherData)
			.catch(this.handleError);
	}

	getDegrees(){
		return this.http.get(this._apiUrl)
			.map(this.extractDegreesData)
			.catch(this.handleError);
	}

	getLocationName(){
		return this.http.get(this._apiUrl)
			.map(this.extractLocationName)
			.catch(this.handleError);
	}

	private extractLocationName(res: Response){
		let body = res.json();
		return body['name'];
	}

	private extractDegreesData(res :Response){
		let body = res.json();
		return body['main']['temp'];
	}

	private extractWeatherData(res: Response){
		let body = res.json();
		return body['weather'][0]['main'].toString();
	}

	private handleError (error: any) {
    	let errMsg = (error.message) ? error.message :
    	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
	}
}