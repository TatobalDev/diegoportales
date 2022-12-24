import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-image-sidebar-left',
  templateUrl: './half-image-sidebar-left.component.html',
  styleUrls: ['./half-image-sidebar-left.component.css']
})
export class HalfImageSidebarLeftComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog half image with left sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog half image with sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"left"
	}
  constructor() { }

  ngOnInit(): void {
  }

}
