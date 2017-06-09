import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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

}
