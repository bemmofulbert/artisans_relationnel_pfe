import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardWorkspaceMessageChatSpaceComponent } from './art-dashboard-workspace-message-chat-space.component';

describe('ArtDashboardWorkspaceMessageChatSpaceComponent', () => {
  let component: ArtDashboardWorkspaceMessageChatSpaceComponent;
  let fixture: ComponentFixture<ArtDashboardWorkspaceMessageChatSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardWorkspaceMessageChatSpaceComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardWorkspaceMessageChatSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
