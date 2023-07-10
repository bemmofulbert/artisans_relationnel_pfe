import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDashboardComponent } from './art-dashboard.component';

describe('ArtDashboardComponent', () => {
  let component: ArtDashboardComponent;
  let fixture: ComponentFixture<ArtDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDashboardComponent]
    });
    fixture = TestBed.createComponent(ArtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
