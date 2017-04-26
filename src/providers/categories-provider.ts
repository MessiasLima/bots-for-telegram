import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoriesProvider {

	constructor(public http: Http) {
		console.log('Hello CategoriesProvider Provider');
	}

	getCategories(){
		let url: string = "https://storebot.me/api/categories?list=top";
		return this.http.get(url).map(res => res.json());
	}
}
