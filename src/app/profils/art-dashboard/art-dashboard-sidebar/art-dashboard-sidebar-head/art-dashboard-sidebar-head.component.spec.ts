import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardSidebarHeadComponent } from './art-dashboard-sidebar-head.component';

describe('ArtDashboardSidebarHeadComponent', () => {
  let component: ArtDashboardSidebarHeadComponent;
  let fixture: ComponentFixture<ArtDashboardSidebarHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardSidebarHeadComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardSidebarHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
