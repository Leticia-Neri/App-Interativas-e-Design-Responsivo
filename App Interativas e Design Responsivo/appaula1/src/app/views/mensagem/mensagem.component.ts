import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  dataAtual = new Date();
  
  mensagem =  "Letícia";

  constructor() { }

  ngOnInit(): void {
  }

}
