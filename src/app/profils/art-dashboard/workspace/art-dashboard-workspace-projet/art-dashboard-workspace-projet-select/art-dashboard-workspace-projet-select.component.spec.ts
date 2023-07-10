import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceProjetSelectComponent } from './art-dashboard-workspace-projet-select.component';

describe('ArtDashboardWorkspaceProjetSelectComponent', () => {
  let component: ArtDashboardWorkspaceProjetSelectComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceProjetSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceProjetSelectComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceProjetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
