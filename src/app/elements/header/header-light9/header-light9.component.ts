import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-header-light9',
  templateUrl: './header-light9.component.html',
  styleUrls: ['./header-light9.component.css']
})
export class HeaderLight9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
		  
        /* if (jQuery('select').length) { */
		    jQuery('select').selectpicker();
		/* } */
    })(jQuery);
  
  }

}
