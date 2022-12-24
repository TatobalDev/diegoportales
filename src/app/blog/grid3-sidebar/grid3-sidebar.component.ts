import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid3-sidebar',
  templateUrl: './grid3-sidebar.component.html',
  styleUrls: ['./grid3-sidebar.component.css']
})
export class Grid3SidebarComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog grid 3 with sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog grid 3 with sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"right",
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
