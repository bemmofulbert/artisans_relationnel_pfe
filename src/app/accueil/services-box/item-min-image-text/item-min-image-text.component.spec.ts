import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMinImageTextComponent } from './item-min-image-text.component';

describe('ItemMinImageTextComponent', () => {
  let component: ItemMinImageTextComponent;
  let fixture: ComponentFixture<ItemMinImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMinImageTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMinImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
