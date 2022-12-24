import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style4',
  templateUrl: './footer-style4.component.html',
  styleUrls: ['./footer-style4.component.css']
})
export class FooterStyle4Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 4",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 4",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
