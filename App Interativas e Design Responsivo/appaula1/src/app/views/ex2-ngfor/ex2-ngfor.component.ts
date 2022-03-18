import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-ngfor',
  templateUrl: './ex2-ngfor.component.html',
  styleUrls: ['./ex2-ngfor.component.css']
})
export class Ex2NgforComponent implements OnInit {


  vetorPais = ['Brasil','USA','Canada','Nova Zelandia'];

  nome(param:String){
    alert(param);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
