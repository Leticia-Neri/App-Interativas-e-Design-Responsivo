import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista3ex1Component } from './lista3ex1.component';

describe('Lista3ex1Component', () => {
  let component: Lista3ex1Component;
  let fixture: ComponentFixture<Lista3ex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista3ex1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista3ex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
