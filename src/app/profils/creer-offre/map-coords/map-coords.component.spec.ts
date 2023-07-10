import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCoordsComponent } from './map-coords.component';

describe('MapCoordsComponent', () => {
  let component: MapCoordsComponent;
  let fixture: ComponentFixture<MapCoordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapCoordsComponent]
    });
    fixture = TestBed.createComponent(MapCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
