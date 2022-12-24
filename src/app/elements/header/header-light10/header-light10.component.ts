import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

// Data
import { contact } from '../../../data/contact';

@Component({
  selector: 'app-header-light10',
  templateUrl: './header-light10.component.html',
  styleUrls: ['./header-light10.component.css']
})
export class HeaderLight10Component implements OnInit {
  contact: Contact = contact;

  constructor() { }

  ngOnInit(): void {
  }

}
