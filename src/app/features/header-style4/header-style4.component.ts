import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style4',
  templateUrl: './header-style4.component.html',
  styleUrls: ['./header-style4.component.css']
})
export class HeaderStyle4Component implements OnInit {

	banner : any = {
		pagetitle: "Header Style Transparent",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Header Style Transparent",
	}
  
  constructor() { }

  ngOnInit(): void {
  }

}
