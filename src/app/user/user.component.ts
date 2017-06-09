import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'app';
  formObjects = [];
  register(argument) {

	var formObject = 
		{
			name: (<HTMLInputElement>document.getElementById('name')).value,
			username: (<HTMLInputElement>document.getElementById('username')).value,
			age: (<HTMLInputElement>document.getElementById('age')).value,
			location: (<HTMLInputElement>document.getElementById('location')).value,
			interests: (<HTMLInputElement>document.getElementById('interests')).value
		}

	this.formObjects.push(formObject)
	localStorage['users'] = JSON.stringify({shit: this.formObjects})	

	//var retrievedObject = localStorage['formObject'];

	//console.log(retrievedObject);

	console.log('retrievedObject: ', JSON.parse(localStorage['users']));

	}

	constructor() {
		console.log(this.title);
	}

	ngOnInit() {
  	}

}
