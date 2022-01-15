import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseVisitedMountaineeringAccessoriesComponent } from './base-visited-mountaineering-accessories.component';

describe('BaseVisitedMountaineeringAccessoriesComponent', () => {
  let component: BaseVisitedMountaineeringAccessoriesComponent;
  let fixture: ComponentFixture<BaseVisitedMountaineeringAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseVisitedMountaineeringAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseVisitedMountaineeringAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
