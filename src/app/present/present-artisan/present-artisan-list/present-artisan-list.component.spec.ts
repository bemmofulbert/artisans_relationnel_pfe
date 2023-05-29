import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentArtisanListComponent } from './present-artisan-list.component';

describe('PresentArtisanListComponent', () => {
  let component: PresentArtisanListComponent;
  let fixture: ComponentFixture<PresentArtisanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentArtisanListComponent]
    });
    fixture = TestBed.createComponent(PresentArtisanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
