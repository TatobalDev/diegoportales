import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us4',
  templateUrl: './contact-us4.component.html',
  styleUrls: ['./contact-us4.component.css']
})
export class ContactUs4Component implements OnInit {


banner : any = {
		
		pagetitle: "Contact Us 4",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Contact Us 4",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
