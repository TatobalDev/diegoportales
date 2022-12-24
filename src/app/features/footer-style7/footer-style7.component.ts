import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style7',
  templateUrl: './footer-style7.component.html',
  styleUrls: ['./footer-style7.component.css']
})
export class FooterStyle7Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 7",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 7",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
