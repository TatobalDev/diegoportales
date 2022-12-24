import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style-dark4',
  templateUrl: './header-style-dark4.component.html',
  styleUrls: ['./header-style-dark4.component.css']
})
export class HeaderStyleDark4Component implements OnInit {
  
	banner : any = {
		pagetitle: "Header Style Overlay",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Header Style Overlay",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
