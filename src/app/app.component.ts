import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  register(argument) {

	var formObject = [
		{
			name: (<HTMLInputElement>document.getElementById('name')).value,
			username: (<HTMLInputElement>document.getElementById('username')).value,
			age: (<HTMLInputElement>document.getElementById('age')).value,
			location: (<HTMLInputElement>document.getElementById('location')).value,
			interests: (<HTMLInputElement>document.getElementById('interests')).value
		}
	]

	console.log(formObject);
}

}
