import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2NgforComponent } from './ex2-ngfor.component';

describe('Ex2NgforComponent', () => {
  let component: Ex2NgforComponent;
  let fixture: ComponentFixture<Ex2NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2NgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
