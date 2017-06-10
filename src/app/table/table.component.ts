import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  fakeObject = [];

  constructor() { }

  ngOnInit() {
  	if ("users" in localStorage){
  		this.fakeObject = JSON.parse(localStorage['users'])["root"];
  	} else {
  		this.fakeObject = [];
  	}
  }

}
