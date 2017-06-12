import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {

	title = 'app';

	// inside object validation
	present(key, value) {
		if (value.length > 0) {
			// return true
			return ""
		} else {
			return { error: true, message: key + " is not present!"}.message
		}
	}

	unique(key, value) {
		var parsedLocalStorageLength = JSON.parse(localStorage['users'])['root'].length
		var localStorageUserNames = [];
		for (var i = 0; i < parsedLocalStorageLength; i++) {
			localStorageUserNames.push(JSON.parse(localStorage['users'])['root'][i]['username'])
		}
		if (localStorageUserNames.indexOf(value) !== -1) {
			return { error: true, message: "username already taken, enter another username" }.message
		} else {
			// return true
			return ""
		}
	}

	nameValidation(name) {
		return this.present("name", name)
	}

	usernameValidation(username) {
		return this.unique("username", username)	
	}

	ageValidation(age) {
		if (age >= 18) {
			// return true
			return ""
		} else {
			return { error: true, message: "You should be atleast 18 years old!"}.message
		}
	}

	locationValidation(location) {
		return this.present("location", location)
	}

	interestsValidation(interests) {
		if (interests.indexOf(',') > -1) {
			// return true
			return ""
		} else {
			return { error: true, message: "Please insert atleast two interests with comma separated!"}.message
		}
	}

	validation(object) {
		var validatedName = this.nameValidation(object.name)
		var validatedUserName = this.usernameValidation(object.username)
		var validatedAge = this.ageValidation(object.age)
		var validatedInterests = this.interestsValidation(object.interests)

		if (validatedName !== "" || validatedUserName !== "" || validatedAge !== "" || validatedInterests !== "") {
			alert("You have problem in your form: " + validatedName + " " + validatedUserName + " " + validatedAge + " " + validatedInterests)
			return false
		} else {
			return true
		}
	};


	register() {
		var formObjects = []
		if ( "users" in localStorage) {
			formObjects = JSON.parse(localStorage['users'])['root']
		} 
		else {
			formObjects = []
		}

		var formObject = 
		{
			name: (<HTMLInputElement>document.getElementById('name')).value,
			username: (<HTMLInputElement>document.getElementById('username')).value,
			age: (<HTMLInputElement>document.getElementById('age')).value,
			location: (<HTMLInputElement>document.getElementById('location')).value,
			interests: (<HTMLInputElement>document.getElementById('interests')).value
		}

		//form Object validation
		//this.validation(formObject)
		if (this.validation(formObject)) {
			formObjects.push(formObject)
			localStorage['users'] = JSON.stringify({root: formObjects})
		}		
	}


	ngOnInit():  void {
		// this.register();
	}

}
