import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
	
banner : any = {
		
		pagetitle: "Shop Grid 4",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Shop Grid 4",
	}	

  constructor() { }

  ngOnInit(): void {
  }

}
