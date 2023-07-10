import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardTopbarComponent } from './art-dashboard-topbar.component';

describe('ArtDashboardTopbarComponent', () => {
  let component: ArtDashboardTopbarComponent;
  let fixture: ComponentFixture<ArtDashboardTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardTopbarComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
