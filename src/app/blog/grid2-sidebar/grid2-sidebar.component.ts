import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid2-sidebar',
  templateUrl: './grid2-sidebar.component.html',
  styleUrls: ['./grid2-sidebar.component.css']
})
export class Grid2SidebarComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog large image with sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image with sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"right",
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
