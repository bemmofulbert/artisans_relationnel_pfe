import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceMessageContactsComponent } from './art-dashboard-workspace-message-contacts.component';

describe('ArtDashboardWorkspaceMessageContactsComponent', () => {
  let component: ArtDashboardWorkspaceMessageContactsComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceMessageContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceMessageContactsComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceMessageContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
