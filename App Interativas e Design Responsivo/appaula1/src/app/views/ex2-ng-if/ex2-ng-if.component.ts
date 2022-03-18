import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-ng-if',
  templateUrl: './ex2-ng-if.component.html',
  styleUrls: ['./ex2-ng-if.component.css']
})
export class Ex2NgIfComponent implements OnInit {

  valor1 = 0;
  valor2 = 0;
  result = 0;
  constructor() { }

  soma(){
    this.result = this.valor1 + this.valor2;
  }

  multiplicacao(){
    this.result = this.valor1 * this.valor2;
  }

  divisao(){
    this.result = this.valor1 / this.valor2;
  }
  sub(){
    this.result = this.valor1 - this.valor2;
  }
  ngOnInit(): void {
  }

}
