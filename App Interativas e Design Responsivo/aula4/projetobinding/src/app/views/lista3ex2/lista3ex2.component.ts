import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista3ex2',
  templateUrl: './lista3ex2.component.html',
  styleUrls: ['./lista3ex2.component.css']
})
export class Lista3ex2Component implements OnInit {

  constructor() { }

  soma(num1: number, num2: number) {
    return num1 + num2;
  }

  ngOnInit(): void {
  }

}
