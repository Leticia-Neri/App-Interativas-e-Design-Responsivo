import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1-ngfor',
  templateUrl: './ex1-ngfor.component.html',
  styleUrls: ['./ex1-ngfor.component.css']
})
export class Ex1NgforComponent implements OnInit {

  vetorImagens = ['assets/img1.jpg', 'assets/img2.jfif', 'assets/img3.jpg'];


  ngOnInit(): void {
  }

}
