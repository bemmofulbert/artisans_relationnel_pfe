import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisansUnitComponent } from './present-artisans-unit.component';

describe('PresentArtisansUnitComponent', () => {
  let component: PresentArtisansUnitComponent;
  let fixture: ComponentFixture<PresentArtisansUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisansUnitComponent]
    });
    fixture = TestBed.createComponent(PresentArtisansUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
