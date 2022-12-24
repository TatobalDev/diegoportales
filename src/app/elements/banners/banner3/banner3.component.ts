import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-banner3',
  templateUrl: './banner3.component.html',
  styleUrls: ['./banner3.component.css']
})
export class Banner3Component implements OnInit {

	@Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
