import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.css']
})
export class Grid3Component implements OnInit {



	banner : any = {
		pagetitle: "Blog grid 3",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog grid 3",
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
