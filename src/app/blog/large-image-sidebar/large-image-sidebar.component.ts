import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-image-sidebar',
  templateUrl: './large-image-sidebar.component.html',
  styleUrls: ['./large-image-sidebar.component.css']
})
export class LargeImageSidebarComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog large image with sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image with sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"right"
	}
  constructor() { }

  ngOnInit(): void {
  }

}
