import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1NgforComponent } from './ex1-ngfor.component';

describe('Ex1NgforComponent', () => {
  let component: Ex1NgforComponent;
  let fixture: ComponentFixture<Ex1NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1NgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
