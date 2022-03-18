import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exericio5Component } from './exericio5.component';

describe('Exericio5Component', () => {
  let component: Exericio5Component;
  let fixture: ComponentFixture<Exericio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exericio5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exericio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
