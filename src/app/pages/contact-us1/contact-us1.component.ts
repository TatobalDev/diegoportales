import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us1',
  templateUrl: './contact-us1.component.html',
  styleUrls: ['./contact-us1.component.css']
})
export class ContactUs1Component implements OnInit {


banner : any = {
		
		pagetitle: "Contact Us",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Contact Us",
	}



  constructor() { }

  ngOnInit(): void {
  }

}
