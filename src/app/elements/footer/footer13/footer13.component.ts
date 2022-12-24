import { Component, OnInit } from '@angular/core';

// Data
import { contact } from '../../../data/contact';

// Interface
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-footer13',
  templateUrl: './footer13.component.html',
  styleUrls: ['./footer13.component.css']
})
export class Footer13Component implements OnInit {
  contact: Contact = contact;
  
  constructor() { }

  ngOnInit(): void {
  }

}
