import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceMessageComponent } from './art-dashboard-workspace-message.component';

describe('ArtDashboardWorkspaceMessageComponent', () => {
  let component: ArtDashboardWorkspaceMessageComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceMessageComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
