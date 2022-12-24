import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style10',
  templateUrl: './footer-style10.component.html',
  styleUrls: ['./footer-style10.component.css']
})
export class FooterStyle10Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 10",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 10",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
