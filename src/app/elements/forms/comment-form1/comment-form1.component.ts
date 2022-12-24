import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-form1',
  templateUrl: './comment-form1.component.html',
  styleUrls: ['./comment-form1.component.css']
})
export class CommentForm1Component implements OnInit {

	@Input() data : any;

  constructor() { }

  ngOnInit(): void {
  }

}
