import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style6',
  templateUrl: './header-style6.component.html',
  styleUrls: ['./header-style6.component.css']
})
export class HeaderStyle6Component implements OnInit {

	banner : any = {
		pagetitle: "Header Style Transparent Topbar",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Header Style Transparent Topbar",
	}
  
  constructor() { }

  ngOnInit(): void {
  }

}
