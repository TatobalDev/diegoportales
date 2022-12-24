import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

banner : any = {
		
		pagetitle: "Teachers",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Teachers",
	}
	
teachers : any[] = [
		{
			teacher_image: "assets/images/our-team/pic1.jpg",
			teacher_name: "Nashid Martines",
			teacher_post: "Director",
			fb_link: "javascript:void(0);",
			twitter_link: "javascript:void(0);",
			linkedin_link: "javascript:void(0);",
			pinterest_link: "javascript:void(0);",

		},
	]		
	
constructor() { }

  ngOnInit(): void {
  }

}
