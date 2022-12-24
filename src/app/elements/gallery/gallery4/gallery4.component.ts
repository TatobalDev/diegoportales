import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery4',
  templateUrl: './gallery4.component.html',
  styleUrls: ['./gallery4.component.css']
})
export class Gallery4Component implements OnInit {

	@Input()  data : any;

  constructor() { }

  ngOnInit(): void {
  }

}
