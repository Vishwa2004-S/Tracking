import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelHistory } from './travel-history';

describe('TravelHistory', () => {
  let component: TravelHistory;
  let fixture: ComponentFixture<TravelHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
