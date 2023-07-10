import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardSidebarFootComponent } from './art-dashboard-sidebar-foot.component';

describe('ArtDashboardSidebarFootComponent', () => {
  let component: ArtDashboardSidebarFootComponent;
  let fixture: ComponentFixture<ArtDashboardSidebarFootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardSidebarFootComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardSidebarFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
