import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-sidebar-left',
  templateUrl: './single-sidebar-left.component.html',
  styleUrls: ['./single-sidebar-left.component.css']
})
export class SingleSidebarLeftComponent implements OnInit {


banner : any = {
		
		pagetitle: "Blog single with left sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog single with left sidebar",
	}

	layout : any = {	
		sidebar: true,
		sidebarPosition:"left",
		container_class:""
	}


  constructor() { }

  ngOnInit(): void {
  }

}
