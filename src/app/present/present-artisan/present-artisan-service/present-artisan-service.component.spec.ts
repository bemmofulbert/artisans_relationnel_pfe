import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisanServiceComponent } from './present-artisan-service.component';

describe('PresentArtisanServiceComponent', () => {
  let component: PresentArtisanServiceComponent;
  let fixture: ComponentFixture<PresentArtisanServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisanServiceComponent]
    });
    fixture = TestBed.createComponent(PresentArtisanServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
