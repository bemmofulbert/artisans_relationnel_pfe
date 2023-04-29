import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilHeaderComponent } from './accueil-header.component';

describe('AccueilHeaderComponent', () => {
  let component: AccueilHeaderComponent;
  let fixture: ComponentFixture<AccueilHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
