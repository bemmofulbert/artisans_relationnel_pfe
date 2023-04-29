import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosArtisantsComponent } from './nos-artisants.component';

describe('NosArtisantsComponent', () => {
  let component: NosArtisantsComponent;
  let fixture: ComponentFixture<NosArtisantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosArtisantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosArtisantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
