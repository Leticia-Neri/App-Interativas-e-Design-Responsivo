import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista3ex2Component } from './lista3ex2.component';

describe('Lista3ex2Component', () => {
  let component: Lista3ex2Component;
  let fixture: ComponentFixture<Lista3ex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista3ex2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista3ex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
