import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercico1CanalComponent } from './exercico1-canal.component';

describe('Exercico1CanalComponent', () => {
  let component: Exercico1CanalComponent;
  let fixture: ComponentFixture<Exercico1CanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercico1CanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercico1CanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
