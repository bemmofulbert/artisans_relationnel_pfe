import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentProjetsComponent } from './present-projets.component';

describe('PresentProjetsComponent', () => {
  let component: PresentProjetsComponent;
  let fixture: ComponentFixture<PresentProjetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentProjetsComponent]
    });
    fixture = TestBed.createComponent(PresentProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
