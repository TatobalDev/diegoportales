import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-university',
  templateUrl: './home-university.component.html',
  styleUrls: ['./home-university.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeUniversityComponent implements OnInit {
	skills : any = {
		title : "Educación de calidad",
		sub_title : "Encendiendo la chispa del genio en cada niño.",
		content : "<p>Entregar a nuestros estudiantes educación de calidad, de forma íntegra, propiciando oportunidades de movilización intelectual y social promoviendo oportunidades de aprendizaje permanentes en un contexto inclusivo y equitativo.</p><ul class='list-check circle primary text-black'><li>Formación técnica profesional</li><li>Respeto y buenos valores</li><li>Docentes de primer nivel</li></ul>",
		content_link:"about-1",
		exp_content:"<h2 class='no-title'>+18</h2><h4 class='title'>años educando con amor</h4>",
		images_data:{
			"img1": "assets/images/about/about2/pic3.jpg",
			"img2": "assets/images/about/about2/pic4.jpg"},
		};
	

  constructor() { }

  ngOnInit(): void {
  }

}
