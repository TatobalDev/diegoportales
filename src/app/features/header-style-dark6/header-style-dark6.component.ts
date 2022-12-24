import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style-dark6',
  templateUrl: './header-style-dark6.component.html',
  styleUrls: ['./header-style-dark6.component.css']
})
export class HeaderStyleDark6Component implements OnInit {

  
	banner : any = {
		pagetitle: "Header Style Overlay Topbar",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Header Style Overlay Topbar",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
