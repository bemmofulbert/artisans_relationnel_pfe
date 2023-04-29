import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePosterComponent } from './sample-poster.component';

describe('SamplePosterComponent', () => {
  let component: SamplePosterComponent;
  let fixture: ComponentFixture<SamplePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
