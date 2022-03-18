import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista3ex1',
  templateUrl: './lista3ex1.component.html',
  styleUrls: ['./lista3ex1.component.css']
})
export class Lista3ex1Component implements OnInit {

  nome='Olá';
  album='album 1';
  interprete='Leticia';

  style = 'style';

  constructor() { }

  ngOnInit(): void {
  }

}
