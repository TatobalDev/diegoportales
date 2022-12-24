import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-kindergarten',
  templateUrl: './home-kindergarten.component.html',
  styleUrls: ['./home-kindergarten.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeKindergartenComponent implements OnInit {

	header : any = {
		header_class: "bg-primary text-white",
		logo_image: "assets/images/logo-2.png",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
