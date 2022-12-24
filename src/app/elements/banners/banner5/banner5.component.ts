import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner5',
  templateUrl: './banner5.component.html',
  styleUrls: ['./banner5.component.css']
})
export class Banner5Component implements OnInit {

	@Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
