import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  upperCase(nome : string): string{
    return nome.toUpperCase();
  }
}