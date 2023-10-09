import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFillComponent } from './color-fill.component';

describe('ColorFillComponent', () => {
  let component: ColorFillComponent;
  let fixture: ComponentFixture<ColorFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
