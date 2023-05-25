import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enregistrement2Component } from './enregistrement2.component';

describe('Enregistrement2Component', () => {
  let component: Enregistrement2Component;
  let fixture: ComponentFixture<Enregistrement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enregistrement2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enregistrement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
