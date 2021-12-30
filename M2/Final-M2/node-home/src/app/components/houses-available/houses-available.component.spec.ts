import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesAvailableComponent } from './houses-available.component';

describe('HousesAvailableComponent', () => {
  let component: HousesAvailableComponent;
  let fixture: ComponentFixture<HousesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
