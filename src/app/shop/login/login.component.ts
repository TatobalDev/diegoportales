import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


banner : any = {
		
		pagetitle: "Login",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Login",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
