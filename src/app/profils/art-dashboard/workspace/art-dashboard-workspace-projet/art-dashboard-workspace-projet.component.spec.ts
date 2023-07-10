import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceProjetComponent } from './art-dashboard-workspace-projet.component';

describe('ArtDashboardWorkspaceProjetComponent', () => {
  let component: ArtDashboardWorkspaceProjetComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceProjetComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
