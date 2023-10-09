import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorValueComponent } from './color-value.component';

describe('ColorValueComponent', () => {
  let component: ColorValueComponent;
  let fixture: ComponentFixture<ColorValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
