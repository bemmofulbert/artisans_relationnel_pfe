import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisansComponent } from './present-artisans.component';

describe('PresentArtisansComponent', () => {
  let component: PresentArtisansComponent;
  let fixture: ComponentFixture<PresentArtisansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisansComponent]
    });
    fixture = TestBed.createComponent(PresentArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
