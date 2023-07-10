import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceProjetListItemComponent } from './art-dashboard-workspace-projet-list-item.component';

describe('ArtDashboardWorkspaceProjetListItemComponent', () => {
  let component: ArtDashboardWorkspaceProjetListItemComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceProjetListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceProjetListItemComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceProjetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
