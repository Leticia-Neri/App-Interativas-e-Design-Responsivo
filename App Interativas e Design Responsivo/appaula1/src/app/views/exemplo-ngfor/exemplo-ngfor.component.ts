import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngfor',
  templateUrl: './exemplo-ngfor.component.html',
  styleUrls: ['./exemplo-ngfor.component.css']
})
export class ExemploNgforComponent implements OnInit {

  vetorAnimais = ['cachorro', 'macaco', 'papagaio', 'gato', 'pavão']
  constructor() { }

  ngOnInit(): void {
  }

}
