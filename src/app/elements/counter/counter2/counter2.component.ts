import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
		(function ($) {
			
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
			
		})(jQuery);
	}

}
