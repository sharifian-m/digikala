import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseVisitedPhoneComponent } from './base-visited-phone.component';

describe('BaseVisitedPhoneComponent', () => {
  let component: BaseVisitedPhoneComponent;
  let fixture: ComponentFixture<BaseVisitedPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseVisitedPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseVisitedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
