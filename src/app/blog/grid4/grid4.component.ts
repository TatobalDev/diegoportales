import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.css']
})
export class Grid4Component implements OnInit {



	banner : any = {
		pagetitle: "Blog grid 4",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog grid 4",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:"",
		gridClass:"col-lg-4"
	}
  constructor() { }

	ngOnInit(): void {
		(function ($) {
			
			var self = jQuery("#masonry, .masonry");
				self.imagesLoaded(function () {
					self.masonry({
						gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container"
					});
				});
			
		})(jQuery);
	}

}
