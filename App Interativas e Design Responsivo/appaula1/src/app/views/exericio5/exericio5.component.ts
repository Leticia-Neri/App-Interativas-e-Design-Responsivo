import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exericio5',
  templateUrl: './exericio5.component.html',
  styleUrls: ['./exericio5.component.css']
})
export class Exericio5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foto1 = 'assets/img1.jpg';


  mudarImg(){
    if(this.foto1 == 'assets/img1.jpg'){
      this.foto1 = 'assets/img2.jpg';
    }
    else{
      this.foto1 = 'assets/img1.jpg';
    }
  }

}
