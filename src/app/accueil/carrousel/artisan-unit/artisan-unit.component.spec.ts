import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanUnitComponent } from './artisan-unit.component';

describe('PresentArtisanUnitComponent', () => {
  let component: ArtisanUnitComponent;
  let fixture: ComponentFixture<ArtisanUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtisanUnitComponent]
    });
    fixture = TestBed.createComponent(ArtisanUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
