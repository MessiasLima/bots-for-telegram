import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BotsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BotsService {

	constructor(public http: Http) {
		console.log('Hello BotsService Provider');
	}

	getBots(list: string = "top") {
		let url: string = "https://storebot.me/api/bots?list=" + list + "&categoryId=entertainment&languages=english%3Bportuguese&offset=0&count=48";
		return this.http.get(url).map(res => res.json());
	}
}
