import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style12',
  templateUrl: './footer-style12.component.html',
  styleUrls: ['./footer-style12.component.css']
})
export class FooterStyle12Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 12",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 12",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
