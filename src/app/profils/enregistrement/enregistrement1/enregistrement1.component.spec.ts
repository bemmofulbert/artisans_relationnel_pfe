import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enregistrement1Component } from './enregistrement1.component';

describe('Enregistrement1Component', () => {
  let component: Enregistrement1Component;
  let fixture: ComponentFixture<Enregistrement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enregistrement1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enregistrement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
