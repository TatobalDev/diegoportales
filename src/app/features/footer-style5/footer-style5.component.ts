import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style5',
  templateUrl: './footer-style5.component.html',
  styleUrls: ['./footer-style5.component.css']
})
export class FooterStyle5Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 5",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 5",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
