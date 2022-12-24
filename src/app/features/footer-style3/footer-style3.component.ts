import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style3',
  templateUrl: './footer-style3.component.html',
  styleUrls: ['./footer-style3.component.css']
})
export class FooterStyle3Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 3",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 3",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
