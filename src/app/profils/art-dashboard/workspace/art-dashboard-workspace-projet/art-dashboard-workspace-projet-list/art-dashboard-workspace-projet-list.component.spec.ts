import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceProjetListComponent } from './art-dashboard-workspace-projet-list.component';

describe('ArtDashboardWorkspaceProjetListComponent', () => {
  let component: ArtDashboardWorkspaceProjetListComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceProjetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceProjetListComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceProjetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
