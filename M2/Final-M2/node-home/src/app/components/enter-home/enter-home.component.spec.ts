import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterHomeComponent } from './enter-home.component';

describe('EnterHomeComponent', () => {
  let component: EnterHomeComponent;
  let fixture: ComponentFixture<EnterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
