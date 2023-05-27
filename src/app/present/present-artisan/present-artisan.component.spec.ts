import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisanComponent } from './present-artisan.component';

describe('PresentArtisanComponent', () => {
  let component: PresentArtisanComponent;
  let fixture: ComponentFixture<PresentArtisanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisanComponent]
    });
    fixture = TestBed.createComponent(PresentArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
