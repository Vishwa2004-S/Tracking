import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentFacts } from './shipment-facts';

describe('ShipmentFacts', () => {
  let component: ShipmentFacts;
  let fixture: ComponentFixture<ShipmentFacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentFacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentFacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
