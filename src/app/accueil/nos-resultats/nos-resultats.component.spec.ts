import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosResultatsComponent } from './nos-resultats.component';

describe('NosResultatsComponent', () => {
  let component: NosResultatsComponent;
  let fixture: ComponentFixture<NosResultatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosResultatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
