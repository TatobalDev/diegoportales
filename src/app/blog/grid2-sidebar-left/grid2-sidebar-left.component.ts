import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid2-sidebar-left',
  templateUrl: './grid2-sidebar-left.component.html',
  styleUrls: ['./grid2-sidebar-left.component.css']
})
export class Grid2SidebarLeftComponent implements OnInit {



	banner : any = {
		pagetitle: "Blog large image left sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog large image left sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"left",
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
