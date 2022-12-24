import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-image-sidebar',
  templateUrl: './half-image-sidebar.component.html',
  styleUrls: ['./half-image-sidebar.component.css']
})
export class HalfImageSidebarComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog half image with sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog half image with sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"right"
	}
  constructor() { }

  ngOnInit(): void {
  }

}
