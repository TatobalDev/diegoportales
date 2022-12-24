import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-content12',
  templateUrl: './content12.component.html',
  styleUrls: ['./content12.component.css']
})
export class Content12Component implements OnInit {

  	@Input() data : any;
	
  constructor() { }

  ngOnInit(): void {
  }

}
