import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-sidebar',
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent implements OnInit {


banner : any = {
		
		pagetitle: "Shop Grid 3 Side Bar",
		bg_image: "assets/images/banner/bnr5.jpg",
		title: "Shop Grid 3 Side Bar",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
