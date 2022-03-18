import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  styleClass = 'divA';

  constructor() { }

  ngOnInit(): void {
  }

  dizerOi(): string {
    return 'Oi';
  }


}
