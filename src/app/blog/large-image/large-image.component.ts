import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-image',
  templateUrl: './large-image.component.html',
  styleUrls: ['./large-image.component.css']
})
export class LargeImageComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog large image",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:""
	}
  constructor() { }

  ngOnInit(): void {
  }

}
