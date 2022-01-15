import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingSupermarketOfferComponent } from './amazing-supermarket-offer.component';

describe('AmazingSupermarketOfferComponent', () => {
  let component: AmazingSupermarketOfferComponent;
  let fixture: ComponentFixture<AmazingSupermarketOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingSupermarketOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingSupermarketOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
