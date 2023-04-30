import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoinsNousComponent } from './rejoins-nous.component';

describe('RejoinsNousComponent', () => {
  let component: RejoinsNousComponent;
  let fixture: ComponentFixture<RejoinsNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejoinsNousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejoinsNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
