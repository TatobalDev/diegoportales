import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources-details',
  templateUrl: './cources-details.component.html',
  styleUrls: ['./cources-details.component.css']
})
export class CourcesDetailsComponent implements OnInit {

banner : any = {
		
		pagetitle: "Courses Details",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Courses Details",
	}
	
	constructor() { }

  ngOnInit(): void {
  }

}
