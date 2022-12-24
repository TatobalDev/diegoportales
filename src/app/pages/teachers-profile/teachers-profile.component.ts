import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-profile',
  templateUrl: './teachers-profile.component.html',
  styleUrls: ['./teachers-profile.component.css']
})
export class TeachersProfileComponent implements OnInit {

banner : any = {
		
		pagetitle: "Teachers Profile",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Teachers Profile",
	}
	
  constructor() { }

  ngOnInit(): void {
  }

}
