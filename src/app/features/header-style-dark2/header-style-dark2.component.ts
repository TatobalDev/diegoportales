import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style-dark2',
  templateUrl: './header-style-dark2.component.html',
  styleUrls: ['./header-style-dark2.component.css']
})
export class HeaderStyleDark2Component implements OnInit {

	
	banner : any = {
		pagetitle: "Header Style Curve",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Header Style Curve",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
