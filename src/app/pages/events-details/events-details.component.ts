import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

banner : any = {
		
		pagetitle: "Event Details",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Event Details",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
