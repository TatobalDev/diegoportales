import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style11',
  templateUrl: './footer-style11.component.html',
  styleUrls: ['./footer-style11.component.css']
})
export class FooterStyle11Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 11",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 11",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
