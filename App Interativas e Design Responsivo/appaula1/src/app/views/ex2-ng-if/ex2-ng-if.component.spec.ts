import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2NgIfComponent } from './ex2-ng-if.component';

describe('Ex2NgIfComponent', () => {
  let component: Ex2NgIfComponent;
  let fixture: ComponentFixture<Ex2NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2NgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
