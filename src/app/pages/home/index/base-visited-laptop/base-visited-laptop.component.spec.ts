import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseVisitedLaptopComponent } from './base-visited-laptop.component';

describe('BaseVisitedLaptopComponent', () => {
  let component: BaseVisitedLaptopComponent;
  let fixture: ComponentFixture<BaseVisitedLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseVisitedLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseVisitedLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
