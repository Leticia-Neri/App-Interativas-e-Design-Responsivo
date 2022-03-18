import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1NgIfComponent } from './ex1-ng-if.component';

describe('Ex1NgIfComponent', () => {
  let component: Ex1NgIfComponent;
  let fixture: ComponentFixture<Ex1NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1NgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
