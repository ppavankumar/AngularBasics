import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextDisplayComponent } from './child-text-display.component';

describe('ChildTextDisplayComponent', () => {
  let component: ChildTextDisplayComponent;
  let fixture: ComponentFixture<ChildTextDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTextDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
