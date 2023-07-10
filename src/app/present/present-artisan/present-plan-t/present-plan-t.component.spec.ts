import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPlanTComponent } from './present-plan-t.component';

describe('PresentPlanTComponent', () => {
  let component: PresentPlanTComponent;
  let fixture: ComponentFixture<PresentPlanTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentPlanTComponent]
    });
    fixture = TestBed.createComponent(PresentPlanTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
