import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  texto = '';
  styleClass = 'classA';

  mudarTexto(){
    this.texto = "Ola, mundo";
  }

  mudarClasse(){
    if(this.styleClass == 'classA'){
      this.styleClass='classB';
    }
    else{
      this.styleClass = 'classA';
    }
  }
}
