import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
	datas: any

	constructor(private http: Http) { 
		// console.log('DataService Initialized...');
	}

	getData(){
		
	}		
}