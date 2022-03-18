import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foto1 = 'assets/img1.jpg';
  foto2 = 'assets/img2.jpg';
  foto3 = 'assets/img3.jpg';

  img1 = 'detalhe1';
  img2 = 'detalhe2';
  img3 = 'detalhe3';

  

}
