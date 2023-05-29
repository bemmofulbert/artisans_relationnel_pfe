import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisanUnitComponent } from './present-artisan-unit.component';

describe('PresentArtisanUnitComponent', () => {
  let component: PresentArtisanUnitComponent;
  let fixture: ComponentFixture<PresentArtisanUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisanUnitComponent]
    });
    fixture = TestBed.createComponent(PresentArtisanUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
