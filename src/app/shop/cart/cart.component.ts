import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


banner : any = {
		
		pagetitle: "Shop Cart",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Cart",
	}
  constructor() { }

	ngOnInit(): void {
		(function ($) {
			
			jQuery("input[name='demo_vertical2']").TouchSpin({
			  verticalbuttons: true,
			  verticalupclass: 'ti-plus',
			  verticaldownclass: 'ti-minus'
			});
			jQuery('select').selectpicker();
			
		})(jQuery);
	}

}
