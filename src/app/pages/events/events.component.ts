import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

banner : any = {
		
		pagetitle: "Event 1",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Event 1",
	}

	
events : any[] = [
		{
			event_image: "assets/events/grid/pic1.jpg",
			event_date: "<strong>10 June</strong> <span> 2020</span>",
			event_time: "05:00 PM",
			event_locaiton: "Marmora Road",
			event_title: "Why is Early Education Essential?",
			event_link: "event-details",
		},
	]		
	constructor() { }

  ngOnInit(): void {
  }

}
