import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseVisitedBagAndPhoneComponent } from './base-visited-bag-and-phone.component';

describe('BaseVisitedBagAndPhoneComponent', () => {
  let component: BaseVisitedBagAndPhoneComponent;
  let fixture: ComponentFixture<BaseVisitedBagAndPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseVisitedBagAndPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseVisitedBagAndPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
