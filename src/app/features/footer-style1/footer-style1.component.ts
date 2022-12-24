import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style1',
  templateUrl: './footer-style1.component.html',
  styleUrls: ['./footer-style1.component.css']
})
export class FooterStyle1Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 1",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 1",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
