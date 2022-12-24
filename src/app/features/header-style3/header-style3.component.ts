import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style3',
  templateUrl: './header-style3.component.html',
  styleUrls: ['./header-style3.component.css']
})
export class HeaderStyle3Component implements OnInit {

	
	banner : any = {
		pagetitle: "Header Style Topbar Primary",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Header Style Topbar Primary",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
