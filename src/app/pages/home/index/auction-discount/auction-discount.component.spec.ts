import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionDiscountComponent } from './auction-discount.component';

describe('AuctionDiscountComponent', () => {
  let component: AuctionDiscountComponent;
  let fixture: ComponentFixture<AuctionDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
