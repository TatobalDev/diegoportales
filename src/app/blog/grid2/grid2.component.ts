import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.css']
})
export class Grid2Component implements OnInit {



	banner : any = {
		pagetitle: "Blog grid 2",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog grid 2",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:"",
		gridClass:"col-lg-6"
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
