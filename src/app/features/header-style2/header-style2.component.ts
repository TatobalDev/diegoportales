import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style2',
  templateUrl: './header-style2.component.html',
  styleUrls: ['./header-style2.component.css']
})
export class HeaderStyle2Component implements OnInit {

	
	banner : any = {
		pagetitle: "Header Style Curve",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Header Style Curve",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
