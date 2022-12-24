import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style6',
  templateUrl: './footer-style6.component.html',
  styleUrls: ['./footer-style6.component.css']
})
export class FooterStyle6Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 6",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 6",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
