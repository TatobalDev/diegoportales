import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-image',
  templateUrl: './half-image.component.html',
  styleUrls: ['./half-image.component.css']
})
export class HalfImageComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog half image",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog half image",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:""
	}
  constructor() { }

  ngOnInit(): void {
  }

}
