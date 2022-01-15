import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPopularComponent } from './recent-popular.component';

describe('RecentPopularComponent', () => {
  let component: RecentPopularComponent;
  let fixture: ComponentFixture<RecentPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
