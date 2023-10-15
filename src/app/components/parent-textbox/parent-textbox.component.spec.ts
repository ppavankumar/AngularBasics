import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTextboxComponent } from './parent-textbox.component';

describe('ParentTextboxComponent', () => {
  let component: ParentTextboxComponent;
  let fixture: ComponentFixture<ParentTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
