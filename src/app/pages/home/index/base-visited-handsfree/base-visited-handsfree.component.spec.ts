import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseVisitedHandsfreeComponent } from './base-visited-handsfree.component';

describe('BaseVisitedHandsfreeComponent', () => {
  let component: BaseVisitedHandsfreeComponent;
  let fixture: ComponentFixture<BaseVisitedHandsfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseVisitedHandsfreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseVisitedHandsfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
