import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentProjetComponent } from './present-projet.component';

describe('PresentProjetComponent', () => {
  let component: PresentProjetComponent;
  let fixture: ComponentFixture<PresentProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentProjetComponent]
    });
    fixture = TestBed.createComponent(PresentProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
