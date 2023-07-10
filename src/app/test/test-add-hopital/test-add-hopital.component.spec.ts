import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAddHopitalComponent } from './test-add-hopital.component';

describe('TestAddHopitalComponent', () => {
  let component: TestAddHopitalComponent;
  let fixture: ComponentFixture<TestAddHopitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAddHopitalComponent]
    });
    fixture = TestBed.createComponent(TestAddHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
