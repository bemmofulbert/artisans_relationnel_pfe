import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardSidebarComponent } from './art-dashboard-sidebar.component';

describe('ArtDashboardSidebarComponent', () => {
  let component: ArtDashboardSidebarComponent;
  let fixture: ComponentFixture<ArtDashboardSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardSidebarComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
