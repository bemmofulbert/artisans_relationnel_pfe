import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisansListComponent } from './present-artisans-list.component';

describe('PresentArtisansListComponent', () => {
  let component: PresentArtisansListComponent;
  let fixture: ComponentFixture<PresentArtisansListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisansListComponent]
    });
    fixture = TestBed.createComponent(PresentArtisansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
