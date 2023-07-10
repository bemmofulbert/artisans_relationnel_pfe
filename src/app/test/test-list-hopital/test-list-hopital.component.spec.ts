import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListHopitalComponent } from './test-list-hopital.component';

describe('TestListHopitalComponent', () => {
  let component: TestListHopitalComponent;
  let fixture: ComponentFixture<TestListHopitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestListHopitalComponent]
    });
    fixture = TestBed.createComponent(TestListHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
