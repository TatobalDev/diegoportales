import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style9',
  templateUrl: './footer-style9.component.html',
  styleUrls: ['./footer-style9.component.css']
})
export class FooterStyle9Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 9",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 9",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
