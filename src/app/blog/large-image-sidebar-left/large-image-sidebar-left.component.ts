import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-image-sidebar-left',
  templateUrl: './large-image-sidebar-left.component.html',
  styleUrls: ['./large-image-sidebar-left.component.css']
})
export class LargeImageSidebarLeftComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog large image left sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image left sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"left"
	}
  constructor() { }

  ngOnInit(): void {
  }

}
