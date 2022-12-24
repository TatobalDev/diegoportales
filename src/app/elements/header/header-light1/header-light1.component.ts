import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-light1',
  templateUrl: './header-light1.component.html',
  styleUrls: ['./header-light1.component.css']
})
export class HeaderLight1Component implements OnInit {

  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
