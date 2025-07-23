import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingInput } from './tracking-input';

describe('TrackingInput', () => {
  let component: TrackingInput;
  let fixture: ComponentFixture<TrackingInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
