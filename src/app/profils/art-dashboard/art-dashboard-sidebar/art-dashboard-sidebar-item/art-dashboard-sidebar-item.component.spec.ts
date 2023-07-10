import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardSidebarItemComponent } from './art-dashboard-sidebar-item.component';

describe('ArtDashboardSidebarItemComponent', () => {
  let component: ArtDashboardSidebarItemComponent;
  let fixture: ComponentFixture<ArtDashboardSidebarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardSidebarItemComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
