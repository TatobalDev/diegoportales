import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style5',
  templateUrl: './header-style5.component.html',
  styleUrls: ['./header-style5.component.css']
})
export class HeaderStyle5Component implements OnInit {
  
	banner : any = {
		pagetitle: "Header Style Transparent Topbar",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Header Style Transparent Topbar",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
