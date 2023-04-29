import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosPrincipesComponent } from './nos-principes.component';

describe('NosPrincipesComponent', () => {
  let component: NosPrincipesComponent;
  let fixture: ComponentFixture<NosPrincipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosPrincipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosPrincipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
