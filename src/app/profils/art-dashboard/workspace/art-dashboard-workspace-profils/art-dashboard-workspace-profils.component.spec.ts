import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceProfilsComponent } from './art-dashboard-workspace-profils.component';

describe('ArtDashboardWorkspaceProfilsComponent', () => {
  let component: ArtDashboardWorkspaceProfilsComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceProfilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceProfilsComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
